const express = require('express');
const Detail = require('../models/Detail');

const router = express.Router();

//save posts

router.post('/detail/save',(req,res)=>{

let newDetail = new Detail(req.body);

newDetail.save((err) =>{
if(err){

return res.status(400).json({
error:err
});
}
return res.status(200).json({
success:"Details saves successfully"
});
});
});

//get posts

router.get('/detail',(req,res)=>{
Detail.find().exec((err,Detail) =>{
if(err){
return res.status(400).json({
error:err
});
}
return res.status(200).json({
success:true,
existingDetail:Detail
});
});
});

//get a specific post

router.get("/detail/:id",(req,res)=>{
let postId = req.params.id;
Detail.findById(postId,(err,post) =>{
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
router.put('/detail/update/:id',(req,res)=>{
    Detail.findByIdAndUpdate(
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
router.delete('/detail/delete/:id',(req,res) =>{
Detail.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
    if(err) return res.status(400).json({
        message:" Deleted unsuccessfully",err
        });
        
        return res.json({
        message:" Deleted Successfully",deletedPost
});
});
});

module.exports = router;