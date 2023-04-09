import { Request, Response } from 'express'
import { createUserValidation } from '../validations/auth.validation'
import { v4 as uuidv4 } from 'uuid'
import { hashing } from '../utils/hashing'
import { createUser } from '../services/auth.service'

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
    } catch (error) {
        console.error('ERROR : user  - register', error)
        return res.status(422).send({ status: false, statusCode: 422, message: error })
    }
}
