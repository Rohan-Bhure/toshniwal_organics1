import { NextFunction ,Request,Response} from "express";

export function userMiddelware(req:Request,res:Response,next:NextFunction){
    try{
       
        next()
    }catch(err){

    }
}