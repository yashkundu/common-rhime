import { Request, Response, NextFunction } from "express";
export declare const RequiredConstraint: (fields: string[]) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
