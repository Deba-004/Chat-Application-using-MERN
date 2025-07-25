import express from "express";
import { sendMessage, getMessage } from "../controller/messege.controller.js";
import secureRoute from "../middleware/secureRoute.js";

const router = express.Router();

router.post("/send/:id",secureRoute ,sendMessage);
router.get("/get/:id", secureRoute, getMessage);

export default router;