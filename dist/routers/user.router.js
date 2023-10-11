"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const common_middleware_1 = require("../middlewares/common.middleware");
const user_validator_1 = require("../validators/user.validator");
const router = (0, express_1.Router)();
router.get("", user_controller_1.userController.getAll);
router.post("", common_middleware_1.commonMiddleware.isBodyValid(user_validator_1.UserValidator.create), user_controller_1.userController.create);
router.get("/:id", auth_middleware_1.authMiddleware.checkAccessToken, user_controller_1.userController.getById);
router.delete("/:id", auth_middleware_1.authMiddleware.checkAccessToken, user_controller_1.userController.deleteById);
router.put("/:id", auth_middleware_1.authMiddleware.checkAccessToken, common_middleware_1.commonMiddleware.isBodyValid(user_validator_1.UserValidator.update), user_controller_1.userController.updateById);
exports.userRouter = router;
