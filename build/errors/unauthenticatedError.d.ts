import { CustomError } from "./customError";
export declare class UnauthenticatedError extends CustomError {
    message: string;
    statusCode: number;
    constructor(message: string);
    serializeError(): {
        msg: string;
    }[];
}
