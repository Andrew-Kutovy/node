import { NextFunction, Request, Response } from "express";

import { authService } from "../services/auth.service";

interface IMessage {
  message: string;
}
class AuthController {
  public async register(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<IMessage>> {
    await authService.register(req.body);

    return res.status(201).json({
      message: "User created",
    });
  }
}

export const authController = new AuthController();
