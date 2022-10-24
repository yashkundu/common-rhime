"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthenticatedError = void 0;
const http_status_codes_1 = require("http-status-codes");
const customError_1 = require("./customError");
class UnauthenticatedError extends customError_1.CustomError {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = http_status_codes_1.StatusCodes.UNAUTHORIZED;
        Object.setPrototypeOf(this, UnauthenticatedError.prototype);
    }
    serializeError() {
        return [
            { msg: `The user is not authenticated.}
        ]
    }

} }
        ];
    }
}
exports.UnauthenticatedError = UnauthenticatedError;
