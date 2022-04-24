var mongoose= require('mongoose')



mongoose.connect("mongodb://localhost/test2")
var  userSchema = mongoose.Schema({
  
  name:{type:String,
  unique:true},
  task:[
    {type:mongoose.Schema.Types.ObjectId,
    ref:"task"}
    ],
  num:Number,
  email:String
  
 
})

module.exports=mongoose.model("user",userSchema)
