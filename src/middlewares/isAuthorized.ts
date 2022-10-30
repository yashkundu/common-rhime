import { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "../errors/unauthorizedError";

export const isAuthorized = async (req: Request, res: Response, next: NextFunction) => {
    if(!req.userAuth.isAuth) throw new UnauthorizedError('The user is not authorized.')
    next()
}