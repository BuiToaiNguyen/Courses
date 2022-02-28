import { createRequire } from 'module';
const require = createRequire(import.meta.url)
const express = require("express")
import {meConTroller} from "../app/controller/MeConTroller.js"
const router = express.Router();


router.post("/handle_checkbox",meConTroller.handle_checkbox)
router.get("/courses",meConTroller.courses)
router.get("/trash",meConTroller.trash)

export default router;

