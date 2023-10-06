import joi from "joi";

import { regexConstants } from "../constants/regex.constants";
import { EGenders } from "../enums/gender.enum";

export class UserValidator {
  static firstName = joi.string().min(2).max(50).trim();
  static age = joi.number().min(4).max(150);
  static genders = joi.valid(...Object.values(EGenders));
  static email = joi.string().regex(regexConstants.EMAIL).trim().required();
  static password = joi
    .string()
    .regex(regexConstants.PASSWORD)
    .trim()
    .required();

  static create = joi.object({
    name: this.firstName,
    age: this.age,
    genders: this.genders,
    email: this.email,
    password: this.password,
  });
  static update = joi.object({
    name: this.firstName,
    age: this.age,
    genders: this.genders,
    email: this.email,
    password: this.password,
  });
}
