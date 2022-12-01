import { Schema, model } from "mongoose"

const productSchema = new Schema(
  {
    _id: Number,
    name: String,
    type: String,
    price: Number,
    rating: Number,
    warrantyYears: Number,
    available: Boolean,
  },
  {
    versionKey: false,
  }
)

const Product = model("Product", productSchema)

export default Product
