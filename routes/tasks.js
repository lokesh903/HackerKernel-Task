var mongoose= require('mongoose')

var  TaskSchema = mongoose.Schema({
  name:String,
  status:String
})

module.exports=mongoose.model("task",TaskSchema)
