"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pinoOptions = void 0;
const pinoOptions = (level, compactReq, compactRes) => ({
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
    serializers: Object.assign(Object.assign({}, (compactReq) && { req(req) {
            return {
                //@ts-ignore
                id: req.id,
                method: req.method,
                url: req.url,
            };
        } }), (compactRes) && { res(res) {
            return {
                statusCode: res.statusCode,
            };
        } })
});
exports.pinoOptions = pinoOptions;
