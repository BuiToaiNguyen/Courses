import Course from "./models/Course.js";
import multi from "../../util/mongoose.js"


class CourseConTroller{

    index(req, res,next){

        Course.findOne({slug:req.params.slug})
        .then(course=>{
            res.render("course/index",{course: multi.multi1(course)})
        })
        .catch(next)
    }

    edit(req, res,next){

        Course.findById(req.params.id)
        .then(course=>{
            res.render("course/update",{course: multi.multi1(course)})
        })
        .catch(next)
    }
    create(req, res,next){

       res.render("course/create")
    }
    store(req, res,next){
        const course = new Course(req.body);
        course.save()
        .then(()=>res.redirect('/me/courses'))
    }
    update(req, res,next){
        Course.updateOne({_id:req.params.id},req.body)
        .then(()=>res.redirect("/me/courses"))
        .catch(next)
    }
    delete(req,res,next){
        Course.delete({_id:req.params.id})
        .then(()=> res.redirect('back'))
        .catch(next)
    }
    deleteReal(req,res,next){
        Course.deleteOne({_id:req.params.id})
        .then(()=> res.redirect('back'))
        .catch(next)
    }
    restore(req,res,next){
        Course.restore({_id:req.params.id})
        .then(()=> res.redirect('back'))
        .catch(next)
    }
    


    


}
 export const  courseConTroller = new CourseConTroller;