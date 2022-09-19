"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectIdValidator = void 0;
const bson_1 = require("bson");
const objectIdValidator = (id) => {
    if (bson_1.ObjectID.isValid(id)) {
        if ((String)(new bson_1.ObjectID(id)) === id)
            return true;
        return false;
    }
    return false;
};
exports.objectIdValidator = objectIdValidator;
