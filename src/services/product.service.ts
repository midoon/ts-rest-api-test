import { logger } from '../utils/logger'
import productModel from '../models/product.model'
import productInterface from '../types/product.type'

export const getProductFromDB = async () => {
    return await productModel
        .find()
        .then((data) => {
            return data
        })
        .catch((error) => {
            logger.info('Could Not get data from DB')
            logger.error(error)
        })
}

export const getProductById = async (id: String) => {
    return await productModel.findOne({ product_id: id })
}

export const addProductToDB = async (payload: productInterface) => {
    return await productModel.create(payload)
}

export const updateProductById = async (id: String, payload: productInterface) => {
    return await productModel.findOneAndUpdate(
        {
            product_id: id
        },
        {
            $set: payload
        }
    )
}

export const deleteProductById = async (id: String) => {
    return await productModel.findOneAndDelete({ product_id: id })
}
