import { Request, Response, NextFunction } from "express";
import { UnauthenticatedError } from "../errors/unauthenticatedError";
import { validateAccessToken } from "../utils/jwt";

interface userProp{
    userId: string;
    userName: string;
    isAuth: boolean
}

declare global{
    namespace Express{
        interface Request{
            user: userProp
        }
    }
}

export const authenticated = async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.signedCookies?.accessToken
    if(!accessToken) throw new UnauthenticatedError('The user is not authenticated')
    try {
        const payload = validateAccessToken(accessToken) as userProp
        req.user = {
            userId: payload.userId,
            userName: payload.userName,
            isAuth: payload.isAuth
        }
    } catch (error) {
        throw new UnauthenticatedError('The user is not authenticated.')
    }
    next()
}