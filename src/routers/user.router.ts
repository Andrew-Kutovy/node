import { NextFunction, Request, Response, Router } from "express";

import { userController } from "../controllers/user.controller";
import { User } from "../models/User.model";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.get("", userController.getAll);

// Endpoint for creating user
router.post(
  "",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { error, value } = UserValidator.create.validate(req.body);
      if (error) {
        throw new Error(error.message);
      }
      const createdUser = await User.create(value);
      res.status(201).json(createdUser);
    } catch (e) {
      next(e);
    }
  },
);

router.get(":id", userController.getById());

router.delete(
  ":id",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;

      await User.findByIdAndDelete(id);

      res.sendStatus(204);
    } catch (e) {
      next(e);
    }
  },
);

router.put(
  ":id",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;

      const user = await User.findByIdAndUpdate(id, req.body, {
        returnDocument: "after",
      });

      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  },
);
export const userRouter = router;
