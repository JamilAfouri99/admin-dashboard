import { Err, Ok, Result, asyncTryCatch } from "admin/utils/result";
import { UserResponse } from "admin/utils/types";
import { HttpService } from "../http/http_service";
import { Env } from "admin/utils/constants/env";

export class UsersApi {
    private httpService: HttpService
    constructor() {
        this.httpService = new HttpService(Env.dev().baseUrl);
    }

    async get(): Promise<Result<UserResponse>> {
        const result = await this.httpService.get<UserResponse>('/users');
        return new Ok(result);
    }
}