import { Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger'
import { createProductValidation } from '../validations/product.validation'
import { getProductFromDB } from '../services/product.service'

// interface
interface productInterface {
    product_id: String
    name: String
    price: Number
    size: String
}

// routing
export const createProduct = (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = createProductValidation(req.body)
  if (error) {
    const errMessage = error.details[0].message
    logger.error('ERROR : product - create', errMessage)
    return res.status(422).send({ status: false, statusCode: 422, message: errMessage, data: {} })
  }
  logger.info('Success POST data product')
  return res.status(200).send({ status: true, statusCode: 200, message: 'Add product success', data: value })
}

export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
    const dataProducts: any = await getProductFromDB()

    const { params: { name } } = req

    if (name) {
        const filterProduct = dataProducts.filter((product: productInterface) => {
            if (product.name === name) {
                return product
            }
        })
        if (filterProduct.length === 0) {
            logger.info('Data not found')
            return res.status(404).send({ status: false, statusCode: 404, message: 'Data Not Found', data: {} })
        }
        logger.info('Success GET data product')
        // data diambil index ke 0 karena data yang ditampilkan hanya berupa 1, data jadi bukan [{data}], tapi {data}
        return res.status(200).send({ status: true, statusCode: 200, message: 'get product success', data: filterProduct[0] })
    }

    logger.info('Success GET data product')
    return res.status(200).send({ status: true, statusCode: 200, message: 'get product success', data: dataProducts })
}
