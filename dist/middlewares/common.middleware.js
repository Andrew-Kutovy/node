"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonMiddleware = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const api_error_1 = require("../errors/api.error");
class CommonMiddleware {
    async isIdValid(req, res, next) {
        try {
            const { id } = req.params;
            if (!mongoose_1.default.isObjectIdOrHexString(id)) {
                throw new api_error_1.ApiError("ID is not valid", 400);
            }
            next();
        }
        catch (e) {
            next(e);
        }
    }
}
exports.commonMiddleware = new CommonMiddleware();
