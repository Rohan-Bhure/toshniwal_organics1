import { Router, Request, Response } from "express";
import { z } from "zod";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { User } from "../db/model.user";
export const userRoute = Router();
dotenv.config()

const userSignupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  mobile: z.string().length(10, "Mobile must be 10 digit long"),
  email: z.string().email("This is not a valid email."),
});

  

userRoute.post("/signup", async (req: Request, res: Response):Promise<any>  => {
  try {
    
    const parsedData = userSignupSchema.safeParse(req.body);

    if (!parsedData.success) {
      return res.status(400).json({
        message: "Invalid input data",
        errors: parsedData.error.format(),
      });
    }

    const { username, password, email, mobile } = parsedData.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    
    await User.create({
      username,
      password: hashedPassword, 
      email,
      mobile
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