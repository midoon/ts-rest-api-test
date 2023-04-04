import { Router, Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger'

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success GET data product')
  res.status(200).send({ data: 'Hello Product' })
})
ProductRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success POST data product')
  res.status(200).send({ status: true, statusCode: 200, data: req.body })
})
