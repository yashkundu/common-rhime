import { Request, Response, NextFunction } from "express";
export declare const isAuthorized: (req: Request, res: Response, next: NextFunction) => Promise<void>;
