import express from "express";
import { config } from "dotenv";
import cors from "cors";

import { ErrorClass } from "./src/utils/error-class.utils.js";
import { globaleResponse } from "./src/middlewares/error-handling.middleware.js";
import chatRouter from "./src/modules/chatbot/chatbot.routes.js";
import interactionRouter from "./src/modules/interactions/interaction.routes.js";

config();

export const createApp = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use("/chat", chatRouter);
  app.use("/analatyics", interactionRouter);
  app.get("/", (req, res, next) =>
    res.status(200).json({
      status: "success",
      message: "Server is running",
    })
  );
  app.use("/*", (req, res, next) => {
    return next(new ErrorClass(`Invalid URL : ${req.originalUrl}`, 404));
  });

  app.use(globaleResponse);

  return app;
};

if (!process.env.NETLIFY) {
  const port = process.env.PORT || 5000;
  const app = createApp();
  app.listen(port, () => console.log(`app listening on port ${port}!`));
}
