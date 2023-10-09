import { FilterQuery } from "mongoose";

import { User } from "../models/User.model";
import { IUser, IUserCredentials } from "../types/user.type";

class UserRepository {
  public async getAll(): Promise<IUser[]> {
    return await User.find();
  }
  public async getOneByParams(params: FilterQuery<IUser>): Promise<IUser> {
    return await User.findOne(params);
  }
  public async getById(id: string): Promise<IUser> {
    return await User.findById(id);
  }
  public async deleteById(id: string): Promise<IUser> {
    return await User.findByIdAndDelete(id);
  }
  public async updateById(id: string, user: Partial<IUser>): Promise<IUser> {
    return await User.findByIdAndUpdate(id, user, {
      returnDocument: "after",
    });
  }
  public async register(dto: IUserCredentials): Promise<IUser> {
    return await User.create({ ...dto });
  }
}

export const userRepository = new UserRepository();
