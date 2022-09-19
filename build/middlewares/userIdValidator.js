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
exports.userIdValidator = void 0;
const objectIdValidator_1 = require("../utils/objectIdValidator");
const badRequestError_1 = require("../errors/badRequestError");
const userIdValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    if (!userId || !(0, objectIdValidator_1.objectIdValidator)(userId))
        throw new badRequestError_1.BadRequestError('Invalid userId in the url param');
    next();
});
exports.userIdValidator = userIdValidator;
