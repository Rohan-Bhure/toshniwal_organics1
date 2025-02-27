import { models, Schema } from "mongoose";
import mongoose from "mongoose";

const ProductCategory = ["Fruits", "Vegetables", "Grains"];
const ProductSchema: Schema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ProductCategory,
      required: true,
    },
    item_name: {
      type: String,
      required: true,
      unique: true,
      minlength:3
    },
    image: {
      data:Buffer,
      contentType: String
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    in_stock: {
      type: Boolean,
      default:true
    },
    available_quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
export const Product = mongoose.model("Product", ProductSchema);
