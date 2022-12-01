import express from "express"
import * as productController from "../controllers/product.controller.js"

//import auth from "../middlewares/auth.middleware.js"

const router = express.Router()

//router.use(auth)

router.get("/", productController.getAllProducts)
router.get("/:id", productController.getProduct)

router.put("/:id", productController.updatedProduct)
router.patch("/:id", productController.updatedProduct)

router.post("/", productController.createProduct)

router.delete("/:id", productController.deleteProduct)

export default router
