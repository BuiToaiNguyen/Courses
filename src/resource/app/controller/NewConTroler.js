import Course from "./models/Course.js";

class NewConTroller{

    index(req, res){
        res.render('news')
    }
    show=(req,res)=>{
        res.render('news')
    }
}

 export const  newConTroller = new NewConTroller;