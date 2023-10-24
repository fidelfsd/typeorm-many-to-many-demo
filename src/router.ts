import { Router } from "express";
import indexRoutes from "./routes/indexRouter";
import userRoutes from "./routes/userRouter";

// -----------------------------------------------------------------------------

const router = Router();

// -----------------------------------------------------------------------------

// home routes
router.use("/", indexRoutes);

// user routes
router.use("/users", userRoutes);

export default router;
