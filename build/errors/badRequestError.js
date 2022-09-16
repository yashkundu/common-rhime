"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const http_status_codes_1 = require("http-status-codes");
const customError_1 = require("./customError");
class BadRequestError extends customError_1.CustomError {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
    serializeError() {
        return [
            { msg: this.message }
        ];
    }
}
exports.BadRequestError = BadRequestError;
