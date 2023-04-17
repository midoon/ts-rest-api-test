import { Request, Response } from 'express'
import { createSessionValidation, createUserValidation, refreshSessionValidation } from '../validations/auth.validation'
import { v4 as uuidv4 } from 'uuid'
import { checkPassword, hashing } from '../utils/hashing'
import { createUser, findUserByEmail } from '../services/auth.service'
import { signJWT, verifyJWT } from '../utils/jwt'

export const registerUser = async (req: Request, res: Response) => {
    req.body.user_id = uuidv4()
    const { error, value } = createUserValidation(req.body)
    if (error) {
        console.log('ERROR: AUTH - REGISTER : ', error.details[0].message)
        return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message })
    }

    try {
        value.password = `${hashing(value.password)}`
        const dataUser = await createUser(value)
        console.error('SUCCESS ADD DATA USER TO DB')
        return res.status(201).send({ status: true, statusCode: 201, message: 'Success regsiter', data: dataUser })
    } catch (error: any) {
        console.error('ERROR : user  - register', error)
        return res.status(422).send({ status: false, statusCode: 422, message: error.message })
    }
}

export const createSession = async (req: Request, res: Response) => {
    const { error, value } = createSessionValidation(req.body)
    if (error) {
        console.log('ERROR: AUTH - CREATE SESSION : ', error.details[0].message)
        return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message })
    }
    try {
        const user: any = await findUserByEmail(value.email)
        const isValid = checkPassword(value.password, user.password)

        if (!isValid) return res.status(401).json({ status: false, statusCode: 401, message: 'Invalid email or password' })

        const accessToken = signJWT({ ...user }, { expiresIn: '1d' })
        const refreshToken = signJWT({ ...user }, { expiresIn: '1y' })

        return res.status(200).send({ status: 'success', statusCode: 200, message: 'Login Success', data: { accessToken, refreshToken } })
    } catch (error: any) {
        console.error('ERROR : user  - register', error)
        return res.status(422).send({ status: false, statusCode: 422, message: error.message })
    }
}

export const refreshSession = async (req: Request, res: Response) => {
    const { error, value } = refreshSessionValidation(req.body)
    if (error) {
        console.log('ERROR: AUTH - REFRESH SESSION : ', error.details[0].message)
        return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message })
    }

    try {
        const { decoded }: any = verifyJWT(value.refreshToken)
        const user = await findUserByEmail(decoded._doc.email)
        if (!user) return false
        const accessToken = signJWT(
            {
                ...user
            },
            { expiresIn: '1d' }
        )
        return res.status(200).send({ status: 'success', statusCode: 200, message: 'Refresh Session Success', data: { accessToken } })
    } catch (error: any) {
        console.error('ERROR : user  - REFRESH SESSION', error)
        return res.status(422).send({ status: false, statusCode: 422, message: error.message })
    }
}
