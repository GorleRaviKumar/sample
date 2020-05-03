var express = require('express');
var router = express.Router();
const mongoose=require("mongoose");

const form_schema=mongoose.Schema({
  first:String,
  last:String,
  email:String
});

const VForm=mongoose.model('Vform',form_schema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.post("/",function(req,res){
  const user= new VForm({
    first:req.body.first,
    last:req.body.last,
    email:req.body.email
  });
  user.save();
  console.log(user);

});


module.exports = router;
