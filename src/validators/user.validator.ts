import joi from "joi";

import { regexConstants } from "../constants/regex.constants";
import { EGenders } from "../enums/gender.enum";

export class UserValidator {
  static create = joi.object({
    name: joi.string().min(2).max(50).trim(),
    age: joi.number().min(4).max(150),
    genders: joi.valid(...Object.values(EGenders)),
    email: joi.string().regex(regexConstants.EMAIL).trim().required(),
    password: joi.string().regex(regexConstants.PASSWORD).trim().required(),
  });
}
