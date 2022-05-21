const express = require('express');
const SummaryTable = require('../models/SummaryTable');

const router = express.Router();

//save posts

router.post('/summarytable/save',(req,res)=>{

let newSummaryTable = new SummaryTable(req.body);

newSummaryTable.save((err) =>{
if(err){

return res.status(400).json({
error:err
});
}
return res.status(200).json({
success:"Save successfully"
});
});
});

//get posts

router.get('/summarytable',(req,res)=>{
SummaryTable.find().exec((err,SummaryTable) =>{
if(err){
return res.status(400).json({
error:err
});
}
return res.status(200).json({
success:true,
existingSummaryTable:SummaryTable
});
});
});

//get a specific post

router.get("/summarytable/:id",(req,res)=>{
let postId = req.params.id;
SummaryTable.findById(postId,(err,post) =>{
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


router.put('/summarytable/update/:id',(req,res)=>{
    SummaryTable.findByIdAndUpdate(
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
router.delete('/summarytable/delete/:id',(req,res) =>{
    SummaryTable.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
    if(err) return res.status(400).json({
        message:"Delete unsuccessful",err
        });
        
        return res.json({
        message:"Delete Successfull",deletedPost
});
});
});

module.exports = router;