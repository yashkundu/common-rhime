import { CustomError } from "./customError";
export declare class DatabaseError extends CustomError {
    message: string;
    statusCode: number;
    constructor(message: string);
    serializeError(): {
        msg: string;
        field?: string | undefined;
        type?: string | undefined;
    }[];
}
