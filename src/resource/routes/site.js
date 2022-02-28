import { createRequire } from 'module';
const require = createRequire(import.meta.url)
const express = require("express")
import {siteConTroller} from "../app/controller/SiteConTroller.js"
const router = express.Router();



router.get("/search",siteConTroller.search)
router.get("/",siteConTroller.index)
export default router ;

