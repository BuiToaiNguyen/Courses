import mongoose from 'mongoose';


async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/courses');

    } catch (error) {
    }

}
export default {connect}