import { CustomError } from "./customError";
export declare class UnauthenticatedError extends CustomError {
    message: string;
    statusCode: number;
    refresh: boolean;
    constructor(message: string, refresh: boolean);
    serializeError(): {
        msg: string;
        refresh: boolean;
    }[];
}
