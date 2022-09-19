import { Request, Response, NextFunction } from "express";
import { objectIdValidator } from "../utils/objectIdValidator";
import { BadRequestError } from "../errors/badRequestError";

export const userIdValidator = async (req: Request, res: Response, next: NextFunction) => {
    const {userId} = req.params
    if(!userId || !objectIdValidator(userId)) throw new BadRequestError(
        'Invalid userId in the url param'
    )
    next()
}

