import { Router } from "express";
import UserController from "../controllers/UserController";

// -----------------------------------------------------------------------------

const router = Router();

// -----------------------------------------------------------------------------

// get all users
router.get("/", UserController.getAllUsers);

// get user by id
router.get("/:id", UserController.getUserById);

export default router;
