import { Router } from "express";
import controllers from "../controllers/user.controller.js";
const router=Router()
router.route("/").get(controllers.home)
router.route("/register").get(controllers.register)
router.route("/login").get(controllers.login)
router.route("/create").post(controllers.create)
router.route("/createLogin").post(controllers.createLogin)
router.route("/logout").post(controllers.logout)
export default router