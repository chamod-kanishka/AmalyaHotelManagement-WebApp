
const express = require('express');
const Event = require("../models/Event");

const router = express.Router();

//save Event

router.post('/event/save',(req,res)=>{

let newEvent = new Event(req.body);

newEvent.save((err) =>{
if(err){

return res.status(400).json({
error:err
});
}
return res.status(200).json({
success:"Event saves successfully"
});
});
});

//get Event

router.get('/Event',(req,res)=>{
Event.find().exec((err,Event) =>{
if(err){
return res.status(400).json({
error:err
});
}
return res.status(200).json({
success:true,
existingEvent:Event
});
});
});

//get a specific post

router.get("/event/:id",(req,res)=>{
let postId = req.params.id;
Event.findById(postId,(err,post) =>{
if(err){
    return res.status(400).json({success:false, err});
}
return res.status(200).json({
    success:true,
    post
});
});
});







//update Room


router.put('/event/update/:id',(req,res)=>{
    Event.findByIdAndUpdate(
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

//delete Room
router.delete('/event/delete/:id',(req,res) =>{
Event.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
    if(err) return res.status(400).json({
        message:"Delete unsuccessful",err
        });
        
        return res.json({
        message:"Delete Successfull",deletedPost
});
});
});

module.exports = router;