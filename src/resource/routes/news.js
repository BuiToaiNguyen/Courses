import { createRequire } from 'module';
const require = createRequire(import.meta.url)
const express = require("express")
import {newConTroller} from "../app/controller/NewConTroler.js"
const router = express.Router();


router.get("/:slug",newConTroller.show)
router.get("/",newConTroller.index);
export default router;

