"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const regex_constants_1 = require("../constants/regex.constants");
const gender_enum_1 = require("../enums/gender.enum");
class UserValidator {
}
exports.UserValidator = UserValidator;
UserValidator.create = joi_1.default.object({
    name: joi_1.default.string().min(2).max(50).trim(),
    age: joi_1.default.number().min(4).max(150),
    genders: joi_1.default.valid(...Object.values(gender_enum_1.EGenders)),
    email: joi_1.default.string().regex(regex_constants_1.regexConstants.EMAIL).trim().required(),
    password: joi_1.default.string().regex(regex_constants_1.regexConstants.PASSWORD).trim().required(),
});
