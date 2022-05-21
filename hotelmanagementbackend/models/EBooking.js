const mongoose = require('mongoose');

const EBookingSchema = new mongoose.Schema({

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
    Event_type:{
        type:String,
        require:true
    },
    Event_date:{
        type:Number,
        require:true
    },
    Event_time:{
        type:String,
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

module.exports = mongoose.model('EBooking',EBookingSchema);