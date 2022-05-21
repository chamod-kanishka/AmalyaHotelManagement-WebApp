
const express = require('express');
const Room = require("../models/Room");

const router = express.Router();

//save Room

router.post('/room/save',(req,res)=>{
let newRoom = new Room(req.body);
newRoom.save((err) =>{
if(err){
return res.status(400).json({
error:err
});
}
return res.status(200).json({
success:"Room saves successfully"
});
});
});

//get Room

router.get('/room',(req,res)=>{
Room.find().exec((err,Room) =>{
if(err){
return res.status(400).json({
error:err
});
}
return res.status(200).json({
success:true,
existingRoom:Room
});
});
});

//get a specific post

router.get("/room/:id",(req,res)=>{
let postId = req.params.id;
Room.findById(postId,(err,post) =>{
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


router.put('/room/update/:id',(req,res)=>{
    Room.findByIdAndUpdate(
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
router.delete('/room/delete/:id',(req,res) =>{
Room.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
    if(err) return res.status(400).json({
        message:"Delete unsuccessful",err
        });
        
        return res.json({
        message:"Delete Successfull",deletedPost
});
});
});

module.exports = router;