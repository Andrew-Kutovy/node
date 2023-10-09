"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const regex_constants_1 = require("../constants/regex.constants");
const gender_enum_1 = require("../enums/gender.enum");
class UserValidator {
}
exports.UserValidator = UserValidator;
_a = UserValidator;
UserValidator.firstName = joi_1.default.string().min(2).max(50).trim();
UserValidator.age = joi_1.default.number().min(4).max(150);
UserValidator.genders = joi_1.default.valid(...Object.values(gender_enum_1.EGenders));
UserValidator.email = joi_1.default.string().regex(regex_constants_1.regexConstants.EMAIL).trim();
UserValidator.password = joi_1.default.string().regex(regex_constants_1.regexConstants.PASSWORD).trim();
UserValidator.create = joi_1.default.object({
    name: _a.firstName,
    age: _a.age,
    genders: _a.genders,
    email: _a.email.required(),
    password: _a.password.required(),
});
UserValidator.update = joi_1.default.object({
    name: _a.firstName,
    age: _a.age,
    genders: _a.genders,
    email: _a.email,
    password: _a.password,
});
UserValidator.register = joi_1.default.object({
    email: _a.email.required(),
    password: _a.password.required(),
});
