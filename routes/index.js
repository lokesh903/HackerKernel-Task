var express = require('express');
var router = express.Router();
var User=require("./users")
var task=require("./tasks");

/* GET home page. */
router.post("/",function(req,res){
  var newtask= {
    name:req.body.name,
    status:req.body.status
  }
  task.create(newtask,function(err,taskdata){
    User.findOne({name:req.body.user},function(err,founduser){
      founduser.task.push(taskdata._id)
      founduser.save()
    })
  })
  
  res.redirect("/")
})
router.get("/",function(req,res){
User.find({},function(err,data){
  res.render("index",{data})
})

})
router.get("/alltasks",function(req,res){
  User.find()
  .populate("task")
  .then(function(data){
    
    res.render("alltasks",{data})
  })
  
  })
router.get("/create",function(req,res){
  res.render("create")
})
router.post("/create",function(req,res){
  var person = new User({
    
    name:req.body.name,
    email:req.body.email,
    num:req.body.num
  })
  person.save()
  res.redirect("/create")
})

module.exports = router;
