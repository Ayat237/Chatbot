import { Schema } from "mongoose";
import BaseModel from "./baseModel.js";

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

class UserModel extends BaseModel {
  constructor(database) {
    super(database, "User", userSchema);
  }

  // Additional user-specific methods...
}

export default UserModel;
