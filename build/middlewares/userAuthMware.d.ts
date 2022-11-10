import { Request, Response, NextFunction } from 'express';
interface userAuthProp {
    userId: string;
    userName: string;
    isAuth: boolean;
}
declare global {
    namespace Express {
        interface Request {
            userAuth: userAuthProp;
        }
    }
}
declare const userAuthMware: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export { userAuthMware };
