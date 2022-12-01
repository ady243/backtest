import config from "./config/config.js"
import app from "./app.js"
import mongoose from "mongoose"

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...")
  console.log(err.name, err.message)
  process.exit(1)
})

mongoose
  .connect(config.db.connection.uriDatabase)
  .then(() => {
    console.log("👌 Database connection successful")
  })
  .catch((err) => {
    console.error("❌ Database connection error")
  })

const PORT = config.port

app.listen(PORT, () => {
  console.log(`Environment: ${config.environment}`)
  console.log(`🎉 Listening on port ${PORT}`)
})

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION!!!  shutting down ...")
  console.log(err.name, err.message)
  // eslint-disable-next-line no-undef
  server.close(() => {
    process.exit(1)
  })
})

export default app
