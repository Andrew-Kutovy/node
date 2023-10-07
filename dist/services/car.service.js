"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carService = void 0;
const car_repository_1 = require("../repositories/car.repository");
class CarService {
    async getAll() {
        return await car_repository_1.carRepository.getAll();
    }
    async create(car) {
        return await car_repository_1.carRepository.create(car);
    }
    async getById(id) {
        return await car_repository_1.carRepository.getById(id);
    }
    async deleteById(id) {
        return await car_repository_1.carRepository.deleteById(id);
    }
    async updateById(id, car) {
        return await car_repository_1.carRepository.updateById(id, car);
    }
}
exports.carService = new CarService();
