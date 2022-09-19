"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
const http_status_codes_1 = require("http-status-codes");
const customError_1 = require("./customError");
class UnauthorizedError extends customError_1.CustomError {
    constructor(message, refresh) {
        super(message);
        this.message = message;
        this.statusCode = http_status_codes_1.StatusCodes.UNAUTHORIZED;
        this.refresh = false;
        this.refresh = refresh;
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
    serializeError() {
        return [
            { msg: `The user is not authorized to access this resource.` }
        ];
    }
}
exports.UnauthorizedError = UnauthorizedError;