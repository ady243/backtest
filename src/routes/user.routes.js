import express from "express"
import * as userController from "../controllers/user.controller.js"
import auth from "../middlewares/auth.middleware.js"

const router = express.Router()

router.post("/login", userController.signInUser)
router.post("/register", userController.createUser)

router.route("/").get(auth, userController.getAllUsers)

router.get("/me", auth, userController.getCurrentUser)
router
  .route("/:id")
  .get(auth, userController.getUser)
  .put(auth, userController.updateUser)
  .delete(auth, userController.deleteUser)

router.put("/:id/password", auth, userController.updateUserPassword)

export default router
