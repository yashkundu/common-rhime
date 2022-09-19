import { CustomError } from "./customError";
export declare class UnauthorizedError extends CustomError {
    message: string;
    statusCode: number;
    constructor(message: string);
    serializeError(): {
        msg: string;
    }[];
}
