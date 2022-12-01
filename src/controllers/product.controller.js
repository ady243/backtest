import * as productService from "../services/product.service.js"

import AppError from "../utils/appError.js"

export const getAllProducts = async (req, res, next) => {
  try {
    /*
    const {
      session: {
        user: { id: authorId },
      },
    } = req
    */
    const products = await productService.findAll(req.query)
    res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}

export const createProduct = async (req, res, next) => {
  try {
    const {
      body: { name, type, price, rating, warrantyYears, available },
    } = req
    /*
    if (!userId) {
      throw new AppError(400, "fail", "Missing authorId")
    }
    */

    const datas = {
      name,
      type,
      price,
      rating,
      warrantyYears,
      available,
    }

    const product = await productService.createOne(datas)
    res.status(201).json(product)
  } catch (error) {
    next(error)
  }
}

export const getProduct = async (req, res, next) => {
  try {
    const {
      params: { id: productId },
    } = req

    const product = await productService.findOneById(productId)

    res.status(200).json(product)
  } catch (error) {
    next(error)
  }
}

export const updatedProduct = async (req, res, next) => {
  try {
    const {
      params: { id: productId },
      body: { name, type, price, rating, warrantyYears, available },
    } = req

    if (!productId) {
      throw new AppError(400, "fail", "Missing productId")
    }

    const datas = {
      name,
      type,
      price,
      rating,
      warrantyYears,
      available,
    }

    const product = await productService.updateOneWithPatch(productId, datas)

    res.status(200).json(product)
  } catch (error) {
    next(error)
  }
}

export const deleteProduct = async (req, res, next) => {
  try {
    const {
      params: { id: productId },
    } = req

    if (!productId) {
      throw new AppError(400, "fail", "Missing productId")
    }

    await productService.deleteOne(productId)

    res.status(200).send({
      status: "success",
      statusCode: 200,
      message: "Product deleted",
    })
  } catch (error) {
    next(error)
  }
}
