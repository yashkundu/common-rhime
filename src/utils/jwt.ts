import jwt from 'jsonwebtoken'

export const validateAccessToken = (token: string) => {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!)
}