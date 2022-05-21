const express = require('express');
const Leave = require('../models/Leave');

const router = express.Router();

//save posts

router.post('/leave/save',(req,res)=>{

let newLeave = new Leave(req.body);

newLeave.save((err) =>{
if(err){

return res.status(400).json({
error:err
});
}
return res.status(200).json({
success:"Leaves saves successfully"
});
});
});

//get posts

router.get('/leave',(req,res)=>{
Leave.find().exec((err,Leave) =>{
if(err){
return res.status(400).json({
error:err
});
}
return res.status(200).json({
success:true,
existingLeave:Leave
});
});
});

//get a specific post

router.get("/leave/:id",(req,res)=>{
let postId = req.params.id;
Leave.findById(postId,(err,post) =>{
if(err){
    return res.status(400).json({success:false, err});
}
return res.status(200).json({
    success:true,
    post
});
});
});







//update posts
router.put('/leave/update/:id',(req,res)=>{
    Leave.findByIdAndUpdate(
req.params.id,
{
$set:req.body
},
(err,post)=>{
    if(err){
        return res.status(400).json({
        error:err
        });
        }
        return res.status(200).json({
        success:"Updated Successfully"
});
});
});

//delete posts
router.delete('/leave/delete/:id',(req,res) =>{
Leave.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
    if(err) return res.status(400).json({
        message:" Deleted unsuccessfully",err
        });
        
        return res.json({
        message:" Deleted Successfully",deletedPost
});
});
});

module.exports = router;