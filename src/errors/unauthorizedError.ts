import { StatusCodes } from "http-status-codes";
import { CustomError } from "./customError";

export class UnauthorizedError extends CustomError{
    statusCode: number = StatusCodes.UNAUTHORIZED

    constructor(public message: string){
        super(message)
        Object.setPrototypeOf(this, UnauthorizedError.prototype)
    }

    serializeError() {
        return [
            {msg: `The user is not authorized to access this resource.`}
        ]
    }

}