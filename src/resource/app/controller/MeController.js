import multi   from "../../util/mongoose.js"

import Course from "./models/Course.js";
class MeConTroller{

    courses = (req, res,next) => {

        var findCourse=Course.find({});
        if(req.query.hasOwnProperty('sort')){
            findCourse=findCourse.sort({
                [req.query.column] : req.query.type
            })
        }      


        Promise.all([findCourse,Course.countDocumentsDeleted()])
        .then(([courses,count])=>{
            res.render("me",{courses: multi.multi(courses),count})
        })


     
   }
   
    trash = (req, res,next) => {
      Course.findDeleted()
      .then(courses=>{
          res.render("trash",{courses: multi.multi(courses)})
      })
      .catch(next)
   }
   handle_checkbox(req,res,next){
    Course.delete({_id:{$in : req.body.checkone}})
    .then(()=> res.redirect('back'))
    .catch(next)
    }
   
 
}
 export const  meConTroller = new MeConTroller;
