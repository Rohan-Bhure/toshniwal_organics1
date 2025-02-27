import { models, Schema } from "mongoose";
import mongoose from "mongoose";
import {User} from './model.user'
import { Product } from "./model.product";


const CustomerDetailsSchema :Schema= new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId ,ref:"User"
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  mobile_primary: {
    type: String,
    require: true,
  },
  mobile_secondary: {
    type: String,
    required: true,
  },
  item_quantity: {
    type: Number,
    required: true,
  },
  product_details:{
    type:mongoose.Schema.Types.ObjectId ,
    ref:"Product"
  },
  comment: {
    type: String,
  },
});
 
export const Customer_Details =  mongoose.model("Customer_Details",CustomerDetailsSchema)