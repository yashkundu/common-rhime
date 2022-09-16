import { CustomError } from './customError';
import { ValidationErrorItem } from 'joi';
import { ValidationTypes } from './types/validationTypes';
export declare class ValidationError extends CustomError {
    private errors;
    statusCode: number;
    constructor(errors: ValidationErrorItem[]);
    serializeError(): {
        msg: string;
        field?: string | undefined;
        type?: ValidationTypes | undefined;
    }[];
}
