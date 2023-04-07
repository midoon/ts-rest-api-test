import { Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger'
import { createProductValidation } from '../validations/product.validation'
import { addProductToDB, getProductById, getProductFromDB } from '../services/product.service'
import { v4 as uuidv4 } from 'uuid'

// routing
export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    req.body.product_id = uuidv4()
    const { error, value } = createProductValidation(req.body)
    if (error) {
        const errMessage = error.details[0].message
        logger.error('ERROR : product - create', errMessage)
        return res.status(422).send({ status: false, statusCode: 422, message: errMessage, data: {} })
    }
    try {
        await addProductToDB(value)
        logger.info('Success POST data product')
        return res.status(201).send({ status: true, statusCode: 201, message: 'Add product success', data: value })
    } catch (error) {
        logger.error('ERROR : product - create', error)
        return res.status(422).send({ status: false, statusCode: 422, message: error, data: {} })
    }
}

export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
    const { params: { product_id } } = req

    if (product_id) {
        const dataProduct = await getProductById(product_id)
        if (dataProduct) {
            logger.info('Success GET data product')
            return res.status(200).send({ status: true, statusCode: 200, message: 'get product success', datat: dataProduct })
        } else {
            logger.info('Data Not Found')
            return res.status(404).send({ status: false, statusCode: 404, message: 'Data not found', datat: {} })
        }
    } else {
        const dataProducts: any = await getProductFromDB()
        logger.info('Success GET data product')
        return res.status(200).send({ status: true, statusCode: 200, message: 'get product success', data: dataProducts })
    }
}
