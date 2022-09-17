"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaValidator = void 0;
const validationError_1 = require("../errors/validationError");
// Generator of a middleware
// declare global {
//     namespace Express {
//       interface Request {
//         doc?: any
//       }
//     }
// }
const SchemaValidator = (schema) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const props = Object.keys(schema.describe().keys);
        let doc = {};
        props.forEach((prop) => {
            if (req.body[prop] != undefined)
                doc[prop] = req.body[prop];
        });
        const { value, error } = schema.validate(doc);
        if (error)
            return next(new validationError_1.ValidationError(error.details));
        req.body = value;
        next();
    });
};
exports.SchemaValidator = SchemaValidator;
