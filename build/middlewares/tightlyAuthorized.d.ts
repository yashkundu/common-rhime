import { Request, Response, NextFunction } from "express";
export declare const tightlyAuthorized: (req: Request, res: Response, next: NextFunction) => Promise<void>;
