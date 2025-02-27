import { models, Schema } from "mongoose";
import mongoose from "mongoose";
const AdminSchema: Schema = new mongoose.Schema({
  username: { type: String, required: true },
  password: {
    type: String,
    required: true,
  },
});
export const Admin = mongoose.model("Admins", AdminSchema);
