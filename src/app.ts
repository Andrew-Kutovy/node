import express from "express";
import * as mongoose from "mongoose";

import { userRouter } from "./routers/user.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRouter);

app.listen(5001, async () => {
  mongoose.connect(
    "mongodb+srv://Andrew:Password123@march2023.bbmbebs.mongodb.net/",
  );
  console.log("serv started");
});
