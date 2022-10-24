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
exports.authenticated = void 0;
const unauthenticatedError_1 = require("../errors/unauthenticatedError");
const jwt_1 = require("../utils/jwt");
const authenticated = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const accessToken = (_a = req.signedCookies) === null || _a === void 0 ? void 0 : _a.accessToken;
    if (!accessToken)
        throw new unauthenticatedError_1.UnauthenticatedError('The user is not authenticated');
    try {
        const payload = (0, jwt_1.validateAccessToken)(accessToken);
        req.user = {
            userId: payload.userId,
            userName: payload.userName,
            isAuth: payload.isAuth
        };
    }
    catch (error) {
        throw new unauthenticatedError_1.UnauthenticatedError('The user is not authenticated.');
    }
    next();
});
exports.authenticated = authenticated;
