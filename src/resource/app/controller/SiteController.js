import multi   from "../../util/mongoose.js"

import Course from "./models/Course.js";
class SiteConTroller{

    index = (req, res,next) => {
      Course.find({})
      .then(courses=>{
          res.render("home",{courses: multi.multi(courses)})
      })
      .catch(next)
   }
   search=(req, res) => {
       res.render("search");
   }
 
}
 export const  siteConTroller = new SiteConTroller;