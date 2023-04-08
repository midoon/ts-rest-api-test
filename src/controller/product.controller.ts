import { Request, Response, NextFunction } from 'express'
import { createProductValidation, updateProductValidation } from '../validations/product.validation'
import { addProductToDB, deleteProductById, getProductById, getProductFromDB, updateProductById } from '../services/product.service'
import { v4 as uuidv4 } from 'uuid'
// import { logger } from '../utils/logger'

// routing
export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    req.body.product_id = uuidv4()
    const { error, value } = createProductValidation(req.body)
    if (error) {
        const errMessage = error.details[0].message
        // logger.error('ERROR : product - create', errMessage)
        console.error('ERROR : product - create', errMessage)
        return res.status(422).send({ status: false, statusCode: 422, message: errMessage })
    }
    try {
        await addProductToDB(value)
        // logger.info('Success POST data product')
        console.log('Success POST data product')
        return res.status(201).send({ status: true, statusCode: 201, message: 'Add product success', data: value })
    } catch (error) {
        // logger.error('ERROR : product - create', error)
        console.error('ERROR : product - create', error)
        return res.status(422).send({ status: false, statusCode: 422, message: error, data: {} })
    }
}

export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
    const { params: { product_id } } = req

    if (product_id) {
        const dataProduct = await getProductById(product_id)
        if (dataProduct) {
            // logger.info('Success GET data product')
            console.log('Success GET data product')
            return res.status(200).send({ status: true, statusCode: 200, message: 'get product success', datat: dataProduct })
        } else {
            // logger.info('Data Not Found')
            console.error('Data Not Found')
            return res.status(404).send({ status: false, statusCode: 404, message: 'Data not found' })
        }
    } else {
        const dataProducts: any = await getProductFromDB()
        // logger.info('Success GET data product')
        console.log('Success GET data product')
        return res.status(200).send({ status: true, statusCode: 200, message: 'get product success', data: dataProducts })
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const { params: { product_id } } = req

    const { error, value } = updateProductValidation(req.body)
    if (error) {
        const errMessage = error.details[0].message
        // logger.error('ERROR : product - create', errMessage)
        console.error('ERROR : product - create', errMessage)
        return res.status(422).send({ status: false, statusCode: 422, message: errMessage })
    }
    try {
        const dataProduct = await updateProductById(product_id, value)
        if (dataProduct) {
            // logger.info('Success Update data product')
            console.log('Success Update data product')
            return res.status(200).send({ status: true, statusCode: 200, message: 'Update product success', data: value })
        } else {
            console.error('ERROR : product - update')
            return res.status(404).send({ status: false, statusCode: 404, message: 'Data Not Found' })
        }
    } catch (error) {
        // logger.error('ERROR : product - create', error)
        console.error('ERROR : product - update', error)
        return res.status(422).send({ status: false, statusCode: 422, message: error })
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { params: { product_id } } = req

    try {
        const dataProduct = await deleteProductById(product_id)
        if (dataProduct) {
            console.log('Success Update data product')
            return res.status(200).send({ status: true, statusCode: 200, message: 'Delete product success' })
        } else {
            console.error('ERROR : product - delete')
            return res.status(404).send({ status: false, statusCode: 404, message: 'Data Not Found' })
        }
    } catch (error) {
        console.error('ERR: product - delete = ', error)
        return res.status(422).send({ status: false, statusCode: 422, message: error })
    }
}
