import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';
import mongoose_delete  from 'mongoose-delete';

mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Courses = new Schema({
    name: { type: String, },
    mota: { type: String,  },
    image: { type: String },
    
    slug: { type: String, slug: 'name' , unique : true }

  },{timestamps:true});
  Courses.plugin(mongoose_delete,{
     deletedAt : true ,
     overrideMethods: 'all'
  });

  
export default  mongoose.model('Courses', Courses,'Courses')
