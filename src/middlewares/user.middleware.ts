import { NextFunction, Request, Response } from "express";

class UserMiddleware {
  public async getByIdOrThrow(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
    } catch (e) {
      next(e);
    }
  }
}

export const userMiddleware = new UserMiddleware();
