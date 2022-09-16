"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
const http_status_codes_1 = require("http-status-codes");
const customError_1 = require("./customError");
const validationTypes_1 = require("./types/validationTypes");
class ValidationError extends customError_1.CustomError {
    constructor(errors) {
        super('Validation error in the fields');
        this.errors = errors;
        this.statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
    serializeError() {
        const errors = this.errors.map((error) => {
            var _a, _b, _c, _d;
            let type = undefined;
            let msg = '';
            if ((_a = error.context) === null || _a === void 0 ? void 0 : _a.hasOwnProperty('limit')) {
                type = validationTypes_1.ValidationTypes.INVALID_LENGTH;
                msg = `${error.path[0]} is of invalid length.`;
            }
            else if ((_b = error.context) === null || _b === void 0 ? void 0 : _b.hasOwnProperty('regex')) {
                type = validationTypes_1.ValidationTypes.INVALID_PATTERN;
                msg = `${error.path[0]} does not satify the mentioned rules.`;
            }
            else if (!((_c = error.context) === null || _c === void 0 ? void 0 : _c.hasOwnProperty('value'))) {
                type = validationTypes_1.ValidationTypes.NOT_PROVIDED;
                msg = `${error.path[0]} is not provided.`;
            }
            else if (((_d = error.context) === null || _d === void 0 ? void 0 : _d.value) === '') {
                type = validationTypes_1.ValidationTypes.EMPTY;
                msg = `${error.path[0]} is empty.`;
            }
            return {
                msg,
                type,
                field: String(error.path[0])
            };
        });
        return errors;
    }
}
exports.ValidationError = ValidationError;
