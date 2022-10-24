import {Request, Response, NextFunction} from 'express'
import { objectIdValidator } from '../utils/objectIdValidator'
import { BadRequestError } from '../errors/badRequestError'

// this is a generator for a middleware to verify object Id of a query

export const queryObjectIdValidator = (field: string) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const queryId = req.query[field] as string
        if(!queryId || !objectIdValidator(queryId)) 
            throw new BadRequestError(`Invalid ${field} in the url param`)
        next()
    }
}