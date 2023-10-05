import { NextFunction, Request, Response } from "express";

import { User } from "../models/User.model";
import { userService } from "../services/user.service";
import { IUser } from "../types/user.type";

class UserController {
  public async getAll(
    req: Request,
    res: Response,

    next: NextFunction,
  ): Promise<Response<IUser[]>> {
    try {
      const users = await userService.getAll();

      return res.json(users);
    } catch (e) {
      next(e);
    }
  }

  public async getById(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { id } = req.params;
      const user = await User.findById(id);

      if (!user) {
        throw new Error("User not found");
      }
      res.json(user);
    } catch (e) {
      next(e);
    }
  }
}

export const userController = new UserController();
