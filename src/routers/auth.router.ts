import { Router } from "express";

import { authController } from "../controllers/auth.controller";

const router = Router();

router.post("/register", authController.register);

export const authRouter = router;
