import { CustomError } from "./customError";
export declare class BadRequestError extends CustomError {
    message: string;
    statusCode: number;
    constructor(message: string);
    serializeError(): {
        msg: string;
        field?: string | undefined;
        type?: string | undefined;
    }[];
}
