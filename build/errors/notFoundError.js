"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const http_status_codes_1 = require("http-status-codes");
const customError_1 = require("./customError");
class NotFoundError extends customError_1.CustomError {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = http_status_codes_1.StatusCodes.NOT_FOUND;
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    serializeError() {
        return [
            { msg: 'The resource cannot be found' }
        ];
    }
}
exports.NotFoundError = NotFoundError;
