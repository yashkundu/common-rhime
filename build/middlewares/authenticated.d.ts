import { Request, Response, NextFunction } from "express";
interface userProp {
    userId: string;
    userName: string;
    isAuth: boolean;
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
