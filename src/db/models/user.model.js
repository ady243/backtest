import { Schema, model } from "mongoose"

const userSchema = new Schema(
  {
    _id: Number,
    name: String,
    email: String,
    passwordHash: String,
    passwordSalt: String,
  },
  {
    versionKey: false,
  }
)

const User = model("User", userSchema)

export default User
