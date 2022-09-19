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
exports.tightlyAuthorized = void 0;
const unauthorizedError_1 = require("../errors/unauthorizedError");
const tightlyAuthorized = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const anotherUserId = req.params.userId;
    if (!anotherUserId)
        throw new unauthorizedError_1.UnauthorizedError('User is not authorized');
    if (req.user.userId !== anotherUserId)
        throw new unauthorizedError_1.UnauthorizedError('User is not authorized');
    next();
});
exports.tightlyAuthorized = tightlyAuthorized;
