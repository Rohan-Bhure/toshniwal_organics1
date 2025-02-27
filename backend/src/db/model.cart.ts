import mongoose from "mongoose";
import { User } from "./model.user"; 
import { Product } from "./model.product"; 
import { Schema } from "mongoose";


const CartSchema:Schema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true, 
    }]
    
  },
  { timestamps: true } 
);

export const Cart = mongoose.model("Cart", CartSchema);
