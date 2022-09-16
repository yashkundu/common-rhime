"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseError = void 0;
const http_status_codes_1 = require("http-status-codes");
const customError_1 = require("./customError");
class DatabaseError extends customError_1.CustomError {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
        Object.setPrototypeOf(this, DatabaseError.prototype);
    }
    serializeError() {
        return [
            {
                msg: this.message
            }
        ];
    }
}
exports.DatabaseError = DatabaseError;
