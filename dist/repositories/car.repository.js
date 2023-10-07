"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carRepository = void 0;
const Car_model_1 = require("../models/Car.model");
class CarRepository {
    async getAll() {
        return await Car_model_1.Car.find();
    }
    async create(car) {
        return await Car_model_1.Car.create(car);
    }
    async getById(id) {
        return await Car_model_1.Car.findById(id);
    }
    async deleteById(id) {
        return await Car_model_1.Car.findByIdAndDelete(id);
    }
    async updateById(id, car) {
        return await Car_model_1.Car.findByIdAndUpdate(id, car, {
            returnDocument: "after",
        });
    }
}
exports.carRepository = new CarRepository();
