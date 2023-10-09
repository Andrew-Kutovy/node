import { Car } from "../models/Car.model";
import { ICar } from "../types/car.type";

class CarRepository {
  public async getAll(): Promise<ICar[]> {
    return await Car.find();
  }
  public async create(car: ICar): Promise<ICar> {
    return await Car.create(car);
  }
  public async getById(id: string): Promise<ICar> {
    return await Car.findById(id);
  }
  public async deleteById(id: string): Promise<ICar> {
    return await Car.findByIdAndDelete(id);
  }
  public async updateById(id: string, car: Partial<ICar>): Promise<ICar> {
    return await Car.findByIdAndUpdate(id, car, {
      returnDocument: "after",
    });
  }
}

export const carRepository = new CarRepository();
