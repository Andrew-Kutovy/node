import { User } from "../models/User.model";
import { IUser } from "../types/user.type";

class UserRepository {
  public async getAll(): Promise<IUser[]> {
    return await User.find();
  }
  public async getById(id: string): Promise<IUser> {
    return await User.findById(id);
  }
  public async deleteById(id: string): Promise<IUser> {
    return await User.findByIdAndDelete(id);
  }
  public async updateById(id: string, user: IUser): Promise<IUser> {
    return await User.findByIdAndUpdate(id, user, {
      returnDocument: "after",
    });
  }
  // public async create(value: IUser): Promise<IUser> {
  //   return await User.create(value);
  // }
}

export const userRepository = new UserRepository();
