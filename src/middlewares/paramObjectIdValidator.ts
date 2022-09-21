import {Request, Response, NextFunction} from 'express'
import { objectIdValidator } from '../utils/objectIdValidator'
import { BadRequestError } from '../errors/badRequestError'

// this is a generator for a middleware to verify object Id of a param

export const paramObjectIdValidator = (field: string) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const paramId = req.params[field]
        if(!paramId || !objectIdValidator(paramId)) 
            throw new BadRequestError(`Invalid ${field} in the url param`)
        next()
    }
}