import { Router } from 'express'

import { createProduct, deleteProduct, getProduct, updateProduct } from '../controller/product.controller'
import { requireAdmin, requireUser } from '../middleware/auth'

export const ProductRouter: Router = Router()

ProductRouter.get('/', requireUser, getProduct)
ProductRouter.get('/:product_id', getProduct)
ProductRouter.post('/', requireAdmin, createProduct)
ProductRouter.put('/:product_id', requireAdmin, updateProduct)
ProductRouter.delete('/:product_id', requireAdmin, deleteProduct)
