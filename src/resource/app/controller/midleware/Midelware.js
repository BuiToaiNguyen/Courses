export default function midelware(req,res,next){
     res.locals._sort={
        enable:false,
        type:"default",
    }
         if(req.query.hasOwnProperty('sort')){

            Object.assign(res.locals._sort,{
                enable:true,
                type:req.query.type,
                column:req.query.column
            })
         }


         next()
}