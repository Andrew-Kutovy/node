"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const common_middleware_1 = require("../middlewares/common.middleware");
const user_validator_1 = require("../validators/user.validator");
const router = (0, express_1.Router)();
router.get("", user_controller_1.userController.getAll);
router.post("", common_middleware_1.commonMiddleware.isBodyValid(user_validator_1.UserValidator.create), user_controller_1.userController.create);
router.get("/:id", user_controller_1.userController.getById);
router.delete("/:id", user_controller_1.userController.deleteById);
router.put("/:id", user_controller_1.userController.updateById);
exports.userRouter = router;
