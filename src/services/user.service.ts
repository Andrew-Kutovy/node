import { userRepository } from "../repositories/user.repository";
import { IUser } from "../types/user.type";

class UserService {
  public async getAll(): Promise<IUser[]> {
    return await userRepository.getAll();
  }
  // public async create(): Promise<IUser> {
  //   return await userRepository.create();

  // try {
  //   const { error, value } = UserValidator.create.validate(req.body);
  //   if (error) {
  //     throw new ApiError(error.message, 400);
  //   }
  //   const createdUser = await User.create(value);
  //   res.status(201).json(createdUser);
  // } catch (e) {
  //   next(e);
  // }
  // }
}

export const userService = new UserService();
