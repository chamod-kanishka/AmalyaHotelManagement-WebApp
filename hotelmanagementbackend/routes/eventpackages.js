const express = require('express');
const Eventpackage = require('../models/Eventpackage');


const router = express.Router();

//save posts

router.post('/eventpackage/save',(req,res)=>{

let newEventpackage = new Eventpackage(req.body);

newEventpackage.save((err) =>{
if(err){

return res.status(400).json({
error:err
});
}
return res.status(200).json({
success:"Posts saves successfully"
});
});
});

//get posts

router.get('/eventpackage',(req,res)=>{
 Eventpackage.find().exec((err,Eventpackage) =>{
if(err){
return res.status(400).json({
error:err
});
}
return res.status(200).json({
success:true,
existingEventpackage:Eventpackage
});
});
});

//get a specific post

router.get("/eventpackage/:id",(req,res)=>{
let postId = req.params.id;
Eventpackage.findById(postId,(err,post) =>{
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


router.put('/eventpackage/update/:id',(req,res)=>{
    Eventpackage.findByIdAndUpdate(
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
router.delete('/eventpackage/delete/:id',(req,res) =>{
Eventpackage.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
    if(err) return res.status(400).json({
        message:"Delete unsuccessful",err
        });
        
        return res.json({
        message:"Delete Successfull",deletedPost
});
});
});

module.exports = router;