import { Request, Response, NextFunction } from 'express';
interface userAuthProp {
    userId: string;
    isAuth: boolean;
}
declare global {
    namespace Express {
        interface Request {
            userAuth: userAuthProp;
        }
    }
}
declare const userAuthMware: (req: Request, res: Response, next: NextFunction) => void;
export { userAuthMware };
