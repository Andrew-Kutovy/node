"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const User_model_1 = require("../models/User.model");
const password_service_1 = require("./password.service");
class AuthService {
    async register(body) {
        const { password } = body;
        const hashedPassword = password_service_1.passwordService.hash(password);
        await User_model_1.User.create({ ...body, password: hashedPassword });
    }
}
exports.authService = new AuthService();
