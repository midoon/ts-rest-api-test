import { Router, Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger'
import { createProductValidation } from '../validation/product.validation'

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success GET data product')
  return res.status(200).send({ data: 'Hello Product' })
})

ProductRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = createProductValidation(req.body)
  if (error) {
    const errMessage = error.details[0].message
    logger.error('ERROR : product - create', errMessage)
    return res.status(422).send({ status: false, statusCode: 422, message: errMessage, data: {} })
  }
  logger.info('Success POST data product')
  return res.status(200).send({ status: true, statusCode: 200, message: 'Add product success', data: value })
})
