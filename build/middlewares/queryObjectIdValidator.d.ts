import { Request, Response, NextFunction } from 'express';
export declare const paramObjectIdValidator: (field: string) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
