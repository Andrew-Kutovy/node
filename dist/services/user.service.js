"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_repository_1 = require("../repositories/user.repository");
class UserService {
    async getAll() {
        return await user_repository_1.userRepository.getAll();
    }
    async deleteById(id) {
        return await user_repository_1.userRepository.deleteById(id);
    }
    async updateById(id, user) {
        return await user_repository_1.userRepository.updateById(id, user);
    }
}
exports.userService = new UserService();
