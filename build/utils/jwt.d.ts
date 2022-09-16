import jwt from 'jsonwebtoken';
export declare const validateAccessToken: (token: string) => string | jwt.JwtPayload;
