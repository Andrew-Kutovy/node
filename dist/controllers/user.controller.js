"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const mongoose = __importStar(require("mongoose"));
const api_error_1 = require("../errors/api.error");
const User_model_1 = require("../models/User.model");
const user_repository_1 = require("../repositories/user.repository");
const user_service_1 = require("../services/user.service");
const user_validator_1 = require("../validators/user.validator");
class UserController {
    async getAll(req, res, next) {
        try {
            const users = await user_service_1.userService.getAll();
            return res.json(users);
        }
        catch (e) {
            next(e);
        }
    }
    async getById(req, res, next) {
        try {
            const { id } = req.params;
            if (!mongoose.isObjectIdOrHexString(id)) {
                throw new api_error_1.ApiError("Not valid ID", 400);
            }
            const user = await user_repository_1.userRepository.getById(id);
            res.json(user);
        }
        catch (e) {
            next(e);
        }
    }
    async create(req, res, next) {
        try {
            const { error, value } = user_validator_1.UserValidator.create.validate(req.body);
            if (error) {
                throw new api_error_1.ApiError(error.message, 400);
            }
            const createdUser = await User_model_1.User.create(value);
            res.status(201).json(createdUser);
        }
        catch (e) {
            next(e);
        }
    }
    async deleteById(req, res, next) {
        try {
            const { id } = req.params;
            await user_service_1.userService.deleteById(id);
            res.sendStatus(204);
        }
        catch (e) {
            next(e);
        }
    }
    async updateById(req, res, next) {
        try {
            const { id } = req.params;
            const body = req.body;
            const user = await user_service_1.userService.updateById(id, body);
            res.status(201).json(user);
        }
        catch (e) {
            next(e);
        }
    }
}
exports.userController = new UserController();
