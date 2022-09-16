import { Request, Response } from "express"

export const pinoOptions = (level: string, compactReq: boolean, compactRes: boolean) => ({
    name: 'albert',
    level: level,
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            levelFirst: true,
            translateTime: 'h:MM TT',
        }
    },
    serializers: {
        ...(compactReq) && {req (req: Request) {
            return {
                //@ts-ignore
                id: req.id,
                method: req.method,
                url: req.url,
            }
        }},
        ...(compactRes) && {res (res: Response) {
            return {
                statusCode: res.statusCode,
            }
        }}
    }
})