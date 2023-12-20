import { Request, Response, NextFunction } from 'express';
import { NotAutherizedError } from '../errors/not-autherized-error';

export const requireAuth = (req:Request,res:Response, next:NextFunction)=>{
    if(!req.currentUser){
        console.log('no Current User found');
        throw new NotAutherizedError();
    }
    next();
}