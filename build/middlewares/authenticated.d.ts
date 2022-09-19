import { Request, Response, NextFunction } from "express";
interface userProp {
    userId: string;
    userName: string;
}
declare global {
    namespace Express {
        interface Request {
            user: userProp;
        }
    }
}
export declare const authenticated: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export {};
