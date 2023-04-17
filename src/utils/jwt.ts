import Jwt from 'jsonwebtoken'
import CONFIG from '../config/environment'

export const signJWT = (payload: Object, options?: Jwt.SignOptions | undefined) => {
    return Jwt.sign(payload, CONFIG.jwt_private, {
        ...(options && options),
        algorithm: 'RS256'
    })
}

export const verifyJWT = (token: string) => {
    try {
        const decoded = Jwt.verify(token, CONFIG.jwt_public)
        return {
            valid: true,
            expired: false,
            decoded
        }
    } catch (error: any) {
        return {
            valid: false,
            expired: error.message === 'jwt is expired or not eligible to use',
            decoded: null
        }
    }
}
