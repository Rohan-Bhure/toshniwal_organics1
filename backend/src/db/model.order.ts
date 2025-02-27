import mongoose from "mongoose";
import { User } from "./model.user"; 
import { Product } from "./model.product"; 

const orderStatus = [
  "Processing",
  "Confirmed",
  "Shipped",
  "Out for Delivery",
  "Delivered",
  "Cancelled",
  "Returned",
  "Refunded",
  "Failed",
];


const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true, 
    },
    order_status: {
      type: String,
      enum: orderStatus,
      default: "Processing",
      required: true,
    },
    quantity:{
        type:Number,
        required:true
    }
  },
  { timestamps: true } 
);

export const Order = mongoose.model("Order", OrderSchema);
