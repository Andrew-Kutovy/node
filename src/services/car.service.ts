import { carRepository } from "../repositories/car.repository";
import { ICar } from "../types/car.type";

class CarService {
  public async getAll(): Promise<ICar[]> {
    return await carRepository.getAll();
  }
  public async create(car: ICar): Promise<ICar> {
    return await carRepository.create(car);
  }
  public async getById(id: string): Promise<ICar> {
    return await carRepository.getById(id);
  }
  public async deleteById(id: string): Promise<ICar> {
    return await carRepository.deleteById(id);
  }
  public async updateById(id: string, car: Partial<ICar>): Promise<ICar> {
    return await carRepository.updateById(id, car);
  }
}

export const carService = new CarService();
