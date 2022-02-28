import { createRequire } from 'module';
const require = createRequire(import.meta.url)
const express = require("express")
import {courseConTroller} from "../app/controller/CourseConTroler.js"
const router = express.Router();

router.get("/create",courseConTroller.create)
router.put("/:id",courseConTroller.update)
router.patch("/:id/restore",courseConTroller.restore)
router.delete("/:id",courseConTroller.delete)
router.delete("/:id/delete",courseConTroller.deleteReal)
router.post("/store",courseConTroller.store)
router.get("/:id/edit",courseConTroller.edit)
router.get("/:slug",courseConTroller.index)

export default router;

