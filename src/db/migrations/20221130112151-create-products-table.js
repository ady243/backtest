import dataProducts from "../../../data/products.js"

export async function up(db, client) {
  const products = dataProducts.map((product) => {
    return {
      _id: product._id,
      name: product.name,
      type: product.type,
      price: product.price,
      rating: product.rating,
      warrantyYears: product.warrantyYears,
      available: product.available,
    }
  })

  for (const product of products) {
    await db.collection("products").insertOne(product)
  }
}
export async function down(db, client) {
  await db.collection("products").deleteMany({})
}
