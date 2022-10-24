"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuthMware = void 0;
const userAuthMware = (req, res, next) => {
    const obj = JSON.parse(req.headers['user-auth']);
    req.userAuth = obj;
    next();
};
exports.userAuthMware = userAuthMware;
