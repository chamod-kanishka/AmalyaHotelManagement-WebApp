const express = require('express');
const Booking = require('../models/Booking');

const router = express.Router();

//save Booking

router.post('/Booking/save',(req,res)=>{

    let newBooking = new Booking(req.body);

    newBooking.save((err) =>{
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

router.get('/Booking',(req,res)=>{
    Booking.find().exec((err,Booking) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingBooking:Booking
        });
    });
});

//get a specific Booking

router.get("/Booking/:id",(req,res)=>{
    let postId = req.params.id;
    Booking.findById(postId,(err,post) =>{
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


router.put('/Booking/update/:id',(req,res)=>{
    Booking.findByIdAndUpdate(
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
router.delete('/Booking/delete/:id',(req,res) =>{
    Booking.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
            
        return res.json({
            message:"Delete Successfull",deletedPost
        });
    });
});

module.exports = router;