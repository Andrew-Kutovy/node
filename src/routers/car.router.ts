// import { Router } from "express";
//
// import { userController } from "../controllers/user.controller";
// import { commonMiddleware } from "../middlewares/common.middleware";
// import { UserValidator } from "../validators/user.validator";
//
// const router = Router();
//
// router.get("", carController.getAll);
// router.post(
//     "",
//     commonMiddleware.isBodyValid(carValidator.create),
//     carController.create,
// );
// router.get("/:id", carController.getById);
// router.delete("/:id", carController.deleteById);
// router.put(
//     "/:id",
//     //commonMiddleware.isIdValid('id'),
//     commonMiddleware.isBodyValid(carValidator.update),
//     carController.updateById);
// export const carRouter = router;
