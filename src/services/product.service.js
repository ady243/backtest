import Product from "../db/models/product.model.js"

import APIFeatures from "../utils/apiFeatures.js"
import AppError from "../utils/appError.js"

const getNextId = async () => {
  const lastProduct = await Product.findOne().sort({ _id: -1 })
  return lastProduct._id + 1
}

export const findAll = async (queryString) => {
  try {
    const features = new APIFeatures(Product.find(), queryString)
      .limit()
      .sort()
      .paginate()

    const products = await features.query.exec()
    return products
  } catch (error) {
    throw error
  }
}

export const createOne = async (datas) => {
  try {
    const nextId = await getNextId()
    const product = await Product.create({ _id: nextId, ...datas })
    return product
  } catch (error) {
    throw error
  }
}

export const findOneById = async (productId) => {
  try {
    const productMatch = await Product.findOne({ _id: productId })
    if (!productMatch) {
      throw new AppError(404, "fail", "No Product found with that id")
    }
    return productMatch
  } catch (error) {
    throw error
  }
}

export const updateOneWithPatch = async (productId, datas) => {
  try {
    const productMatch = await Product.findOne({ _id: productId })
    if (!productMatch) {
      throw new AppError(404, "fail", "No product found with that id")
    }

    const product = await Product.findOneAndUpdate(
      {
        _id: productId,
      },
      datas,
      {
        new: true,
        runValidators: true,
      }
    )
    return product
  } catch (error) {
    throw error
  }
}

export const deleteOne = async (productId) => {
  try {
    const productMatch = await Product.findOne({
      _id: productId,
    })

    if (!productMatch) {
      throw new AppError(404, "fail", "No product found with that id")
    }

    await Product.findOneAndDelete({ _id: productId })
  } catch (error) {
    throw error
  }
}
