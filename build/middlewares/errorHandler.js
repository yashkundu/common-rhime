"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const customError_1 = require("../errors/customError");
const http_status_codes_1 = require("http-status-codes");
const ErrorHandler = (err, req, res, next) => {
    if (err instanceof customError_1.CustomError) {
        //@ts-ignore
        req.log.error(err);
        return res.status(err.statusCode).send({ errors: err.serializeError() });
    }
    //@ts-ignore
    req.log.fatal(err);
    res
        .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ errors: [{ msg: 'Some error has occured inside the server.' }] });
};
exports.ErrorHandler = ErrorHandler;
