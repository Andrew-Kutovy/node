"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const User_model_1 = require("../models/User.model");
const user_validator_1 = require("../validators/user.validator");
const router = (0, express_1.Router)();
router.get("", user_controller_1.userController.getAll);
router.post("", async (req, res, next) => {
    try {
        const { error, value } = user_validator_1.UserValidator.create.validate(req.body);
        if (error) {
            throw new Error(error.message);
        }
        const createdUser = await User_model_1.User.create(value);
        res.status(201).json(createdUser);
    }
    catch (e) {
        next(e);
    }
});
router.get(":id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User_model_1.User.findById(id);
        if (!user) {
            throw new Error("User not found");
        }
        res.json(user);
    }
    catch (e) {
        next(e);
    }
});
router.delete(":id", async (req, res, next) => {
    try {
        const { id } = req.params;
        await User_model_1.User.findByIdAndDelete(id);
        res.sendStatus(204);
    }
    catch (e) {
        next(e);
    }
});
router.put(":id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User_model_1.User.findByIdAndUpdate(id, req.body, {
            returnDocument: "after",
        });
        res.status(201).json(user);
    }
    catch (e) {
        next(e);
    }
});
exports.userRouter = router;
