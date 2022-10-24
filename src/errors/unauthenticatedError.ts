import { StatusCodes } from "http-status-codes";
import { CustomError } from "./customError";

export class UnauthenticatedError extends CustomError{
    statusCode: number = StatusCodes.UNAUTHORIZED

    constructor(public message: string){
        super(message)
        Object.setPrototypeOf(this, UnauthenticatedError.prototype)
    }

    serializeError() {
        return [
            {msg: `The user is not authenticated.}
        ]
    }

}