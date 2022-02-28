
function multi (mongoose){
        return mongoose.map(mongoos =>mongoos.toObject())
    
}
function multi1(mongoose){
        return mongoose ? mongoose.toObject():mongoose;
}
export default {multi,multi1} ;
