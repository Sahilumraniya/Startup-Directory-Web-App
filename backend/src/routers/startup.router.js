import { Router } from "express";
import {
  getAllStartups,
  getuniqueIndustry,
  addStartup,
} from "../controllers/startup.controller.js";

const router = Router();
router.route("/").get(getAllStartups);
router.route("/uniqueIndustry").get(getuniqueIndustry);
router.route("/").post(addStartup);

export default router;
