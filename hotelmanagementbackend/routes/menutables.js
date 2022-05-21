const express = require('express');
const MenuTable = require('../models/MenuTable');

const router = express.Router();

//save posts

router.post('/menutable/save',(req,res)=>{

let newMenuTable = new MenuTable(req.body);

newMenuTable.save((err) =>{
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

router.get('/menutable',(req,res)=>{
MenuTable.find().exec((err,MenuTable) =>{
if(err){
return res.status(400).json({
error:err
});
}
return res.status(200).json({
success:true,
existingMenuTable:MenuTable
});
});
});

//get a specific post

router.get("/menutable/:id",(req,res)=>{
let postId = req.params.id;
MenuTable.findById(postId,(err,post) =>{
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


router.put('/menutable/update/:id',(req,res)=>{
    MenuTable.findByIdAndUpdate(
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
router.delete('/menutable/delete/:id',(req,res) =>{
    MenuTable.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
    if(err) return res.status(400).json({
        message:"Delete unsuccessful",err
        });
        
        return res.json({
        message:"Delete Successfull",deletedPost
});
});
});

module.exports = router;