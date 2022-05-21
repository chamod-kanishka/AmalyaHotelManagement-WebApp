const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({

    First_name:{
        type:String,
        require:true
    },
    Last_name:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Mobile:{
        type:Number,
        require:true
    },
    NIC_number:{
        type:Number,
        require:true
    },
    Adult:{
        type:Number,
        require:true
    },
    Children:{
        type:Number,
        require:true
    
    },
    Singale_room:{
        type:Number,
        require:true
    },
    Double_room:{
        type:Number,
        require:true
    },
    Triple_room:{
        type:Number,
        require:true
    },
    Check_in:{
        type:Number,
        require:true
    },
    Check_out:{
        type:Number,
        require:true
    },
    Cardholder_name:{
        type:String,
        require:true
    },
    Card_type:{
        type:String,
        require:true
    },
    Card_number:{
        type:Number,
        require:true
    },
    Security_code:{
        type:Number,
        require:true
    },
    Expiry_date:{
        type:Number,
        require:true
    }
    




});

module.exports = mongoose.model('Booking',BookingSchema);