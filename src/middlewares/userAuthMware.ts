import {Request, Response, NextFunction} from 'express'


// this middleware parses the user-auth header set by the gateway and populates
// req.userAuth -- {userId, isAuth} :)
interface userAuthProp{
    userId: string;
    userName: string;
    isAuth: boolean
}

declare global{
    namespace Express{
        interface Request{
            userAuth: userAuthProp
        }
    }
}

const userAuthMware = async (req: Request, res: Response, next: NextFunction) => {
    if(req.headers['user-auth']) {
        const obj = JSON.parse(req.headers['user-auth'] as string) as  userAuthProp
        req.userAuth = obj
    }
    next()
}

export {userAuthMware}