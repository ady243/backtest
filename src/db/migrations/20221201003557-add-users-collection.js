export async function up(db, client) {
  const userInitial = {
    _id: 1,
    name: "titi",
    email: "titi",
    password: "Toto2020@",
    passwordHash: "sqs",
    passwordSalt: "qs",
  }

  // create user with hashed password
  await db.collection("users").insertOne(userInitial)
}
export async function down(db, client) {
  await db.collection("users").deleteMany({})
}
