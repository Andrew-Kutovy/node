import express, { NextFunction, Request, Response } from "express";
import * as mongoose from "mongoose";

import { configs } from "./configs/config";
import { userRouter } from "./routers/user.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

const PORT = 5001;

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.json(err.message);
});

app.listen(PORT, async () => {
  await mongoose.connect(configs.DB_URI);
  console.log(`Server has successfully started on PORT ${PORT}`);
});

// CRUD c - create, r - read, u - update, d - delete
