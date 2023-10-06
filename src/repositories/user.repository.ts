import { User } from "../models/User.model";
import { IUser } from "../types/user.type";

class UserRepository {
  public async getAll(): Promise<IUser[]> {
    return await User.find();
  }
  public async getById(id: string): Promise<IUser> {
    return await User.findById(id);
  }
  // public async create(value: IUser): Promise<IUser> {
  //   return await User.create(value);
  // }
}

export const userRepository = new UserRepository();
