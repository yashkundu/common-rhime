import { Request, Response, NextFunction } from 'express';
export declare const queryObjectIdValidator: (field: string) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
