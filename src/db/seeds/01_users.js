import faker from "faker"
import {hashPassword} from "../../security/password/index.js"
import {getRandomRole} from "../../utils/tools.js"

const makeUserPasswordHashAndSalt = (user) => {
  const [passwordHash, passwordSalt] = hashPassword(user.password)

  delete user.password

  return {
    ...user,
    passwordHash,
    passwordSalt,
  }
}

const createInitialUsers = () => {
  const initialUsers = [
    {
      name: "adminName",
      email: "admin@gmail.com",
      password: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "authorName",
      email: "author@gmail.com",
      password: "author",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "userName",
      email: "user@gmail.com",
      password: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]

  return initialUsers.map((user) => makeUserPasswordHashAndSalt(user))
}

const createFakeUser = () => {
  const [passwordHash, passwordSalt] = hashPassword(faker.internet.password())

  return {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    passwordHash,
    passwordSalt,
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
  }
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("users").del()
  const fakeUsers = []
  const desiredUsers = 10
  for (let i = 0; i < desiredUsers; i++) {
    fakeUsers.push(createFakeUser())
  }

  const users = [...createInitialUsers(), ...fakeUsers]

  await knex("users").insert(users)
}
