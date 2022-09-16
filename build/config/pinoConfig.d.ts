import { Request, Response } from "express";
export declare const pinoOptions: (level: string, compactReq: boolean, compactRes: boolean) => {
    name: string;
    level: string;
    transport: {
        target: string;
        options: {
            colorize: boolean;
            levelFirst: boolean;
            translateTime: string;
        };
    };
    serializers: {
        res?: ((res: Response) => {
            statusCode: number;
        }) | undefined;
        req?: ((req: Request) => {
            id: any;
            method: string;
            url: string;
        }) | undefined;
    };
};
