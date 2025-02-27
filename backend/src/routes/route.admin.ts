import { Router, Request, Response } from "express";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { Admin } from "../db/model.admin";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
export const adminRoute = Router();
dotenv.config()

const adminSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

adminRoute.post("/signup", async (req: Request, res: Response):Promise<any>  => {
  try {
    
    const parsedData = adminSchema.safeParse(req.body);

    if (!parsedData.success) {
      return res.status(400).json({
        message: "Invalid input data",
        errors: parsedData.error.format(),
      });
    }

    const { username, password } = parsedData.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    
    await Admin.create({
      username,
      password: hashedPassword, 
    });

    return res.status(201).json({ message: "New Admin Added Successfully" });

  } catch (err: unknown) {
    return res.status(500).json({ message: "Internal Server Error", error: (err as Error).message });
  }
});

adminRoute.post("/signin", async (req: Request, res: Response):Promise<any>  => {
    try {
      
      const parsedData = adminSchema.safeParse(req.body);
  
      if (!parsedData.success) {
        return res.status(400).json({
          message: "Invalid input data",
          errors: parsedData.error.format(),
        });
      }
  
      const { username, password } = parsedData.data;
      const isAdmin = await Admin.findOne({username})
      if(!isAdmin){
         return res.status(401).json({"mgs":"Unathorized Admin credentials"}) 
      }
      //@ts-ignore
      const hashedPassword = await bcrypt.compare(password,isAdmin.password );
      if(hashedPassword){
        //@ts-ignore
        const token = jwt.sign({_id:isAdmin._id,password:isAdmin.password},process.env.SECRET_ADMIN_KEY,{expiresIn:24*60*60})
        return res.status(200).json({
            token
        })
      }
  
  
    } catch (err: unknown) {
      return res.status(500).json({ message: "Internal Server Error", error: (err as Error).message });
    }
  });