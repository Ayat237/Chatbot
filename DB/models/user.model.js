import { Schema, model } from "mongoose";
import BaseModel from "./base.model.js";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["user", "system"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

class UserModel extends BaseModel {
  constructor(database) {
    super(database, "user");
  }

  // Additional user-specific methods...
}

export { UserModel, User };
