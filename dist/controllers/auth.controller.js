"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("../services/auth.service");
class AuthController {
    async register(req, res, next) {
        try {
            await auth_service_1.authService.register(req.body);
            return res.status(201).json({
                message: "User created",
            });
        }
        catch (e) {
            next(e);
        }
    }
}
exports.authController = new AuthController();
