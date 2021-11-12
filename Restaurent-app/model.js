import  mongoose  from "mongoose";

const restaurantSchema =  mongoose.Schema({
    // _id:{
    //     type:Number,
    //     required:true
    // },
    name:{
        type: String,
        required : true
    },
    address:{
        type:String,
        required: true
    },
    ratting:{
        type:Number,
        required:false
    },
    email:{
        type:String,
        required:false
    }
})

export default mongoose.model('restaurants',restaurantSchema)