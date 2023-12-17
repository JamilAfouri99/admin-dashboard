import { NetworkError, BadRequestError, UnauthorizedError, NotFoundError, InternalServerError } from './error-types';

type ErrorHandlerMap = {
    [key: string]: (error: NetworkError) => string;
};

const errorHandlerMap: ErrorHandlerMap = {
    BadRequestError: (error) => {
        return `Bad request error: ${error.message}`;
    },
    UnauthorizedError: (error) => {
        return `Unauthorized error: ${error.message}`;
    },
    NotFoundError: (error) => {
        return `Not found error: ${error.message}`;
    },
    InternalServerError: (error) => {
        return `Internal server error: ${error.message}`;
    },
    NetworkError: (error) => {
        return `Network error: ${error.message}`;
    },
};

export function handleNetworkError(error: NetworkError): string {
    const errorHandler = errorHandlerMap[error.name];
    if (errorHandler) {
        return errorHandler(error);
    } else {
        return `Unknown network error: ${error.message}`;
    }
}
