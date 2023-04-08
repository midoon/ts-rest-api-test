import { Router } from 'express'

import { createProduct, deleteProduct, getProduct, updateProduct } from '../controller/product.controller'

export const ProductRouter: Router = Router()

ProductRouter.get('/', getProduct)
ProductRouter.get('/:product_id', getProduct)
ProductRouter.post('/', createProduct)
ProductRouter.put('/:product_id', updateProduct)
ProductRouter.delete('/:product_id', deleteProduct)
