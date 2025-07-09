import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();


app.use("/register", registerUser)
    

export default router;