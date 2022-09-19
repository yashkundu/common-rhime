import { Request, Response, NextFunction } from "express";
export declare const tightlyAuthorizer: (req: Request, res: Response, next: NextFunction) => Promise<void>;
