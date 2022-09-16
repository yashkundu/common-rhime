import { Request, Response, NextFunction } from "express";
import { Collection } from 'mongodb';
export declare const UniqueConstraint: (field: string, collection: Collection<any>) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
