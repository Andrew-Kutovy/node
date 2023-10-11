import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { commonMiddleware } from "../middlewares/common.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.get("", userController.getAll);
router.post(
  "",
  commonMiddleware.isBodyValid(UserValidator.create),
  userController.create,
);
router.get("/:id", authMiddleware.checkAccessToken, userController.getById);
router.delete(
  "/:id",
  authMiddleware.checkAccessToken,
  userController.deleteById,
);
router.put(
  "/:id",
  authMiddleware.checkAccessToken,
  //commonMiddleware.isIdValid('id'),
  commonMiddleware.isBodyValid(UserValidator.update),
  userController.updateById,
);
export const userRouter = router;
