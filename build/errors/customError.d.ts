export declare abstract class CustomError extends Error {
    abstract statusCode: number;
    abstract serializeError(): {
        msg: string;
        field?: string;
        type?: string;
        refresh?: boolean;
    }[];
    constructor(message: string);
}
