export enum UserRole {
    SuperAdmin = "SuperAdmin",
    Admin = "Admin",
    Srm = "Srm",
    Insight = "Insight",
    Finance = "Finance",
    Avm = "Avm"
}

export enum Status {
    OK = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
    UNPROCESSABLE_CONTENT = 422,
    TECHNICAL_ISSUE = -1
}