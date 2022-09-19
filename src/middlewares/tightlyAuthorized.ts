import { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "../errors/unauthorizedError";


export const tightlyAuthorized = async (req: Request, res: Response, next: NextFunction) => {
    const anotherUserId = req.params.userId
    if(!anotherUserId) throw new UnauthorizedError('User is not authorized')
    if(req.user.userId !== anotherUserId) throw new UnauthorizedError('User is not authorized')
    next()
}