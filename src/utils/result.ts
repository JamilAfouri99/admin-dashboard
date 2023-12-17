import { Status } from "./enums"

export type Result<T> = Err<T> | Ok<T>

export interface ResultContract<T> {
    readonly kind: 'Err' | 'Ok'
    isErr(): this is Err<T>
    map<U>(f: (t: T) => U): Result<U>
    chain<U>(f: (t: T) => Result<U>): Result<U>
    orDefault(defaultValue: T): T
}

export class Err<T> implements ResultContract<T> {
    readonly kind = 'Err'
    constructor(readonly reason: unknown, readonly status?: Status) { }
    messageOr(message: string): string {
        if (typeof this.reason === 'string')
            return this.reason
        if (this.reason && typeof this.reason === 'object' && 'toString' in this.reason) {
            const toString = this.reason.toString()
            if (toString === '[object Object]')
                return JSON.stringify(this.reason, null, 2)
            else
                return toString
        }
        return message
    }
    isErr(): this is Err<T> {
        return true
    }
    map<U>(f: (t: T) => U): Result<U> {
        return new Err(this.reason)
    }
    chain<U>(f: (t: T) => Result<U>): Result<U> {
        return new Err(this.reason)
    }
    orDefault(defaultValue: T): T {
        return defaultValue
    }
}

export class Ok<T> implements ResultContract<T> {
    readonly kind = 'Ok'
    data: any
    constructor(readonly value: T) { }
    isErr(): this is Err<T> {
        return false
    }
    map<U>(f: (t: T) => U): Result<U> {
        return new Ok(f(this.value))
    }
    chain<U>(f: (t: T) => Result<U>): Result<U> {
        return f(this.value)
    }
    orDefault(defaultValue: T): T {
        return this.value
    }
}

export function tryCatch<T>(f: () => T): Result<T> {
    try {
        return new Ok(f())
    } catch (error) {
        return new Err(error)
    }
}

export async function asyncTryCatch<T>(f: () => Promise<T>): Promise<Result<T>> {
    try {
        return new Ok(await f())
    } catch (error) {
        return new Err(error)
    }
}

export function collapseResults<T>(
    results: { [P in keyof T]: Result<T[P]> }
): Result<{ [P in keyof T]: T[P] }> {
    const errs: { [P in keyof T]?: unknown } = {}
    const oks: { [P in keyof T]: T[P] } = {} as { [P in keyof T]: T[P] }
    const keys = Object.keys(results) as (keyof T)[]
    for (const key of keys) {
        const result = results[key]
        if (result.isErr())
            errs[key] = result.reason
        else
            oks[key] = result.value
    }
    if (Object.keys(errs).length)
        return new Err(errs)
    return new Ok(oks)
}

export function optional<T>(value: unknown, f: (value: unknown) => Result<T>): Result<T | null> {
    if (value === undefined || value === null || value === '')
        return new Ok(null)
    return f(value)
}

export function isOneOf<T extends readonly string[]>(values: T, value: unknown): Result<T[number]> {
    if (values.some(v => v === value))
        return new Ok(value as T[number])
    return new Err(`Value must be one of ${values.join(', ')}`)
}
