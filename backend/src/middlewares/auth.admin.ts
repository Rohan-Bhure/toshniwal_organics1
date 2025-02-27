import { NextFunction ,Request,Response} from "express";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export function adminMiddleware(req:Request,res:Response,next:NextFunction){
 try{
        const {token}=req.headers
        if(!token){
            
        }
        //@ts-ignore
        const IsAdmin =jwt.verify(token,process.env.SECRET_ADMIN_KEY)
 }catch{

 }
}