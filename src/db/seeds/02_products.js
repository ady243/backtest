import faker from "faker"

import dataProducts from "../../../data/products.js"

const createInitialProducts = () => {
  const products = dataProducts.map((product) => {
    return {
      name: product.name,
      type: product.type,
      price: product.price,
      rating: product.rating,
      warrantyYears: product.warranty_years,
      available: product.available,
    }
  })

  return products
}

const createFakeProducts = () => {
  return {
    name: faker.name.firstName(),
    type: "phone",
    price: faker.commerce.price(),
    rating: faker.random.number(),
    warrantyYears: faker.random.number(),
    available: faker.random.boolean(),
  }
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("products").del()
  const fakeProducts = []
  const desiredProducts = 10
  for (let i = 0; i < desiredProducts; i++) {
    fakeProducts.push(createFakeProducts())
  }

  const users = [...createInitialProducts(), ...fakeProducts]

  await knex("products").insert(users)
}
