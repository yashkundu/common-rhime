import { Request, Response, NextFunction } from "express";
import { NotFoundError } from "../errors/notFoundError";


export const NotFoundMware = async (req: Request, res: Response, next: NextFunction) => {
        throw new NotFoundError('Page Not found error')
}