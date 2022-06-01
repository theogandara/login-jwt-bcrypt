import { Router } from "express";
import { createUserController } from "../controllers/createUser.controller"
import { deleteUserController } from "../controllers/deleteUser.controller"
import { listUsersController } from "../controllers/listUsers.controller"
import { updateUserController } from "../controllers/updateUser.controller"

export const router = Router()

// Create
router.post("", createUserController)
// Read
router.get("", listUsersController)
// Update
router.put("/:id", updateUserController)
// Delete
router.delete("/:id", deleteUserController)