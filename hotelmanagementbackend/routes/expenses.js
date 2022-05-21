const express = require('express');
const Posts = require('../models/expenses');

const router = express.Router();

//save posts

router.post('/expenses/save',(req,res)=>{

let newPost = new Posts(req.body);

newPost.save((err) =>{
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

router.get('/expenses',(req,res)=>{
  Posts.find().exec((err,posts) =>{
     if(err){
        return res.status(400).json({
          error:err
         });
     }
     return res.status(200).json({
         success:true,
         existingPosts:posts
     });
  });
});

//get a specific post

router.get("/expenses/:id",(req,res)=>{
let postId = req.params.id;
Posts.findById(postId,(err,post) =>{
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


router.put('/expenses/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
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
router.delete('/expenses/delete/:id',(req,res) =>{
Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
    if(err) return res.status(400).json({
        message:"Delete unsuccessful",err
        });
        
        return res.json({
        message:"Delete Successfull",deletedPost
});
});
});

module.exports = router;