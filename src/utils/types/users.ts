import { UserRole } from "../enums";

export type UserResponse = {
    users: User[];
    count: number;
}

export type User = {
    id: string;
    name: string;
    role: UserRole[];
    number: string;
    email: string;
}