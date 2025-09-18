const mongoose=require('mongoose')

const plotSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    characters:{
        type:Array,
        default:[]
    },
    prompt:{
        type:String,
        required:true
    },
    result:{
        type:String,
        required:true
    },
},{timestamps:true})

module.exports=mongoose.model("Plot",plotSchema)