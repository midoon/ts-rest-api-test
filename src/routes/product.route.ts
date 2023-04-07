import { Router } from 'express'

import { createProduct, getProduct } from '../controller/product.controller'

export const ProductRouter: Router = Router()

ProductRouter.get('/', getProduct)
ProductRouter.get('/:product_id', getProduct)
ProductRouter.post('/', createProduct)
