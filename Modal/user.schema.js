const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const userSchema=Schema({
    name:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
       },
    DOB:{
        type:Date,
        default:Date.now,
        get: (val) => val ? require('moment')(val).format('YYYY-MM-DD') : val
    },
    phoneNo:{
        type:String,
        default:0
    },
    address:{
        type:String,
        required:false
    }
})
module.exports=User=mongoose.model('User',userSchema);