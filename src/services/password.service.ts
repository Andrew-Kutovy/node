import bcrypt from "bcrypt";

class PasswordService {
  public async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, 7);
  }
}

export const passwordService = new PasswordService();
