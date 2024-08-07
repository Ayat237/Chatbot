import express from "express";
import { config } from "dotenv";

import { ErrorClass } from "./src/utils/error-class.utils.js";
import { globaleResponse } from "./src/middlewares/error-handling.middleware.js";
import chatRouter from "./src/modules/chatbot/chatbot.routes.js";
import userRouter from "./src/modules/user/user.routes.js";


config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/chat", chatRouter);
app.use("/user", userRouter);
app.use("/", (req, res, next) =>
  res.status(200).json({
    status: "success",
    message: "Server is running",
  })
);
app.use("/*", (req, res, next) => {
  return next(new ErrorClass(`Invalid URL : ${req.originalUrl}`, 404));
});

app.use(globaleResponse);

app.listen(port, () => console.log(`app listening on port ${port}!`));
