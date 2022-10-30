import { Request, Response, NextFunction } from "express";
import { UnauthenticatedError } from "../errors/unauthenticatedError";

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    if(!req.userAuth) throw new UnauthenticatedError('The user is not authenticated.')
    next()
}