import { StatusCodes } from "http-status-codes";
import { CustomError } from "./customError";

export class UnauthorizedError extends CustomError{
    statusCode: number = StatusCodes.UNAUTHORIZED
    refresh: boolean = false;

    constructor(public message: string, refresh: boolean){
        super(message)
        this.refresh = refresh
        Object.setPrototypeOf(this, UnauthorizedError.prototype)
    }

    serializeError() {
        return [
            {msg: `The user is not authorized to access this resource.`}
        ]
    }

}