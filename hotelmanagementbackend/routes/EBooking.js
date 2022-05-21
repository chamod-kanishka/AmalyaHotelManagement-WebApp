const express = require('express');
const EBooking = require('../models/EBooking');

const router = express.Router();

//save Booking

router.post('/EBooking/save',(req,res)=>{

    let newEBooking = new EBooking(req.body);

    newEBooking.save((err) =>{
        if(err){

            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Booking saves successfully"
        });
    });
});

//get Booking

router.get('/EBooking',(req,res)=>{
    EBooking.find().exec((err,EBooking) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingEBooking:EBooking
        });
    });
});

//get a specific Booking

router.get("/EBooking/:id",(req,res)=>{
    let postId = req.params.id;
    EBooking.findById(postId,(err,post) =>{
    if(err){
        return res.status(400).json({success:false, err});
    }
    return res.status(200).json({
        success:true,
        post
        });
    });
});
    



//update Booking


router.put('/EBooking/update/:id',(req,res)=>{
    EBooking.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
        }
        return res.status(200).json({
            success:"Updated Successfully"
        });
    });
});

//delete Booking
router.delete('/EBooking/delete/:id',(req,res) =>{
    EBooking.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
            
        return res.json({
            message:"Delete Successfull",deletedPost
        });
    });
});

module.exports = router;