import { Request, Response, NextFunction } from "express";
import { ForbiddenError } from "../errors/forbiddenError";

export const looselyAuthorized = async (req: Request, res: Response, next: NextFunction) => {
    const anotherUserId = req.params.userId
    if(req.user.userId === anotherUserId) throw new ForbiddenError('Forbidden')
    next()
}
