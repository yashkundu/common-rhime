import { Request, Response, NextFunction } from "express";
import { UnauthenticatedError } from "../errors/unauthenticatedError";
import { validateAccessToken } from "../utils/jwt";



export const authenticated = async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.signedCookies?.accessToken
    if(!accessToken) throw new UnauthenticatedError('The user is not authenticated')
    try {
        const payload = validateAccessToken(accessToken)
        // @ts-ignore
        req.user = {
            // @ts-ignore
            userId: payload.userId,
            // @ts-ignore
            userName: payload.userName,
            // @ts-ignore
            isAuth: payload.isAuth
        }
    } catch (error) {
        throw new UnauthenticatedError('The user is not authenticated.')
    }
    next()
}