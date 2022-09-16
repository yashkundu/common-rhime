import { StatusCodes } from "http-status-codes";
import { CustomError } from "./customError";

export class NotFoundError extends CustomError{
    statusCode: number = StatusCodes.NOT_FOUND

    constructor(public message: string){
        super(message)
        Object.setPrototypeOf(this, NotFoundError.prototype)
    }

    serializeError(): { msg: string; field?: string | undefined; type?: string | undefined; }[] {
        return [
            {msg: 'The resource cannot be found'}
        ]
    }

}