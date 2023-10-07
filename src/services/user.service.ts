import { userRepository } from "../repositories/user.repository";
import { IUser } from "../types/user.type";

class UserService {
  public async getAll(): Promise<IUser[]> {
    return await userRepository.getAll();
  }
  // public async create(user: IUser): Promise<IUser> {
  //   return await User.create(user);
  // }
  public async deleteById(id: string): Promise<IUser> {
    return await userRepository.deleteById(id);
  }
  public async updateById(id: string, user: Partial<IUser>): Promise<IUser> {
    return await userRepository.updateById(id, user);
  }
}

export const userService = new UserService();
