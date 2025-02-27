import { models, Schema } from "mongoose";
import mongoose from "mongoose";

const UserSchema: Schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,

      validate: {
        validator: function (v: any) {
          return /^[0-9]{10}$/.test(v.toString());
        },
      },
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", UserSchema);
