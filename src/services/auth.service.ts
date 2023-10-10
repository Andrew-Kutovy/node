import { User } from "../models/User.model";
import { IUser } from "../types/user.type";
import { passwordService } from "./password.service";

class AuthService {
  public async register(body: IUser): Promise<void> {
    const { password } = body;
    const hashedPassword = passwordService.hash(password);

    await User.create({ ...body, password: hashedPassword });
  }
}

export const authService = new AuthService();
