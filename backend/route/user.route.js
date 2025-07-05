import express from "express";
import { signUp, logIn, logOut, getUser } from "../controller/user.controller.js";
import secureRoute from "../middleware/secureRoute.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/logout", logOut);

router.get("/getUser",secureRoute, getUser);

export default router;