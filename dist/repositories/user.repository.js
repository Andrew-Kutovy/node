"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const User_model_1 = require("../models/User.model");
class UserRepository {
    async getAll() {
        return await User_model_1.User.find();
    }
    async getById(id) {
        return await User_model_1.User.findById(id);
    }
}
exports.userRepository = new UserRepository();
