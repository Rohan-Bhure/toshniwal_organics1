import { Router, Request, Response } from "express";
import { z } from "zod";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { Product } from "../db/model.product";
import multer from 'multer'

export const productRoute = Router();
const storage = multer.memoryStorage()
const upload = multer({storage})
dotenv.config()


const productSchema = z.object({
  category: z.enum(["Fruits", "Vegetables", "Grains"]),
  item_name: z.string().min(3, "Item name must be at least 3 characters long"),
  price: z.number().positive("Price must be a positive number"),
  discount: z.number().min(0, "Discount cannot be negative").default(0),
  in_stock: z.boolean(),
  available_quantity: z.number().int().nonnegative("Quantity cannot be negative"),
});
  

productRoute.post("/add-product",adminMiddleware,upload.single("image") ,async (req: Request, res: Response):Promise<any>  => {
  try {
    
    const parsedData = productSchema.safeParse(req.body);

    if (!parsedData.success) {
      return res.status(400).json({
        message: "Invalid input data",
        errors: parsedData.error.format(),
      });
    }

    const newProduct = new Product({
      ...parsedData,
      image: req.file
        ? { data: req.file.buffer, contentType: req.file.mimetype }
        : null,
    });

    await newProduct.save();
    res.json({ message: "Product added successfully", product: newProduct });
  } catch (err:any) {
    res.status(400).json({ error: err.errors || "Validation failed" });
  }

    
    await Product.create({
      category,
      item_name,
      image,
      price,
      discount,
      in_stock,
      available_quantity

    });

    return res.status(201).json({ message: "New User Added Successfully" });

  } catch (err: unknown) {
    return res.status(500).json({ message: "Internal Server Error", error: (err as Error).message });
  }
});

const userSigninSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    
  });
userRoute.post("/signin", async (req: Request, res: Response):Promise<any>  => {
    try {
      
      const parsedData = userSigninSchema.safeParse(req.body);
  
      if (!parsedData.success) {
        return res.status(400).json({
          message: "Invalid input data",
          errors: parsedData.error.format(),
        });
      }
  
      const { username, password } = parsedData.data;
      const isUser = await User.findOne({username})
      if(!isUser){
         return res.status(401).json({"mgs":"Unathorized User credentials"}) 
      }
      //@ts-ignore
      const hashedPassword = await bcrypt.compare(password,isUser.password );
      if(hashedPassword){
        //@ts-ignore
        const token = jwt.sign({_id:isUser._id,password:isUser.password},process.env.SECRET_USER_KEY)
        return res.status(200).json({
            token
        })
      }
  
  
    } catch (err: unknown) {
      return res.status(500).json({ message: "Internal Server Error", error: (err as Error).message });
    }
  });