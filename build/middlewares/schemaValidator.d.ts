import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from 'joi';
export declare const SchemaValidator: (schema: ObjectSchema) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
