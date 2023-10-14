import { NextFunction, Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("HELLO").status(200);
});
export const userRouter = router;
