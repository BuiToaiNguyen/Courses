import { json } from 'express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url)
const express = require("express")

import router from "./news.js"
import courserouter from "./course.js"
import routersite  from "./site.js"
import merouter  from "./me.js"


function route(app){



    
    app.use("/news",router);
    app.use("/me",merouter);

    app.use("/",routersite)
    app.use("/course",courserouter)

    
   
    
}









export default route 