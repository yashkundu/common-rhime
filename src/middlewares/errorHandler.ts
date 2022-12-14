import { Request, Response, NextFunction } from "express"
import { CustomError } from "../errors/customError"
import {StatusCodes} from 'http-status-codes'

export const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof CustomError){
        //@ts-ignore
        req.log.error(err)
        return res.status(err.statusCode).send({errors: err.serializeError()})
    }

    //@ts-ignore
    if(err instanceof SyntaxError && err.status===400 && 'body' in err){
        //@ts-ignore
        req.log.error(err)
        return res.status(StatusCodes.BAD_GATEWAY).send({errors: [
            {
                msg: 'Error in your request body'
            }
        ]})
    }    
    
    
    //@ts-ignore
    req.log.fatal(err)
    res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({errors: [{msg: 'Some error has occured inside the server.'}]})
}