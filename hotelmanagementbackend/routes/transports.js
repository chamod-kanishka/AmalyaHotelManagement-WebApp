const express = require('express');
const Transport = require('../models/Transport');

const router = express.Router();

//save posts

router.post('/transport/save',(req,res)=>{

let newTransport = new Transport(req.body);

newTransport.save((err) =>{
if(err){

return res.status(400).json({
error:err
});
}
return res.status(200).json({
success:"transport saves successfully"
});
});
});

//get posts

router.get('/transport',(req,res)=>{
    Transport.find().exec((err,Transport) =>{
if(err){
return res.status(400).json({
error:err
});
}
return res.status(200).json({
success:true,
existingTransport:Transport
});
});
});

//get a specific post

router.get("/transport/:id",(req,res)=>{
let postId = req.params.id;
Transport.findById(postId,(err,post) =>{
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


router.put('/transport/update/:id',(req,res)=>{
    Transport.findByIdAndUpdate(
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
        success:"Updated transport Successfully"
});
});
});

//delete posts
router.delete('/transport/delete/:id',(req,res) =>{
    Transport.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
    if(err) return res.status(400).json({
        message:"Delete transport unsuccessful",err
        });
        
        return res.json({
        message:"Delete transport Successfull",deletedPost
});
});
});

module.exports = router;