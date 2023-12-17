export class NetworkError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'NetworkError';
    }
}

export class BadRequestError extends NetworkError {
    constructor(message: string) {
        super(message);
        this.name = 'BadRequestError';
    }
}

export class UnauthorizedError extends NetworkError {
    constructor(message: string) {
        super(message);
        this.name = 'UnauthorizedError';
    }
}

export class NotFoundError extends NetworkError {
    constructor(message: string) {
        super(message);
        this.name = 'NotFoundError';
    }
}

export class InternalServerError extends NetworkError {
    constructor(message: string) {
        super(message);
        this.name = 'InternalServerError';
    }
}