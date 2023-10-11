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
exports.tokenService = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = require("../configs/config");
const api_error_1 = require("../errors/api.error");
class TokenService {
    generateTokenPair(payload) {
        const accessToken = jwt.sign(payload, config_1.configs.JWT_ACCESS_SECRET, {
            expiresIn: "10s",
        });
        const refreshToken = jwt.sign(payload, config_1.configs.JWT_REFRESH_SECRET, {
            expiresIn: "30s",
        });
        return {
            accessToken,
            refreshToken,
        };
    }
    checkToken(token, type) {
        let secret;
        switch (type) {
            case "access":
                secret = config_1.configs.JWT_ACCESS_SECRET;
                break;
            case "refresh":
                secret = config_1.configs.JWT_REFRESH_SECRET;
                break;
            default:
                throw new api_error_1.ApiError("Invalid token type", 500);
        }
        return jwt.verify(token, secret);
    }
}
exports.tokenService = new TokenService();
