import express from "express";
import { Response, Request } from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import { Admin } from "./db/model.admin";
import { connectDB } from "./db/model.utility";

import { adminRoute } from "./routes/route.admin";
import { userRoute } from "./routes/route.user";
import { productRoute } from "./routes/route.product";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/admin',adminRoute)
app.use('/api/v1/user',userRoute)
app.use('/api/v1/product',productRoute)
// app.use('/api/v1/customer',customerRouter)
// app.use('/api/v1/order',orderRouter)
// app.use('/api/v1/cart',cartRouter)

app.listen(3000, () => {
  connectDB();
  console.log("Server Started");
});
