const mongoose = require('mongoose');

const transportSchema = new mongoose.Schema({

fname:{

type:String,
required:true
},

lname:{

    type:String,
    required:true
    },
    
    email:{

        type:String,
        required:true
        },
        phonenumber:{

            type:String,
            required:true
            },
            
            billing:{
            
                type:String,
                required:true
                },
                
                flightnumber:{
            
                    type:String,
                    required:true
                    },
                    flightdatetime:{
            
                        type:String,
                        required:true
                        },
                    additionalinformation:{

                        type:String,
                        required:true
                        },
                        
                        drivername:{
                        
                            type:String,
                            required:true
                            },
                            
                            driverid:{
                        
                                type:String,
                                required:true
                                },
                                vehiclenumber:{

                                    type:String,
                                    required:true
                                    },
                                    
                                    vehicletype:{
                                    
                                        type:String,
                                        required:true
                                        },
                                        
                                        netrate:{
                                    
                                            type:String,
                                            required:true
                                            },
                                            charges:{

                                                type:String,
                                                required:true
                                                },
                                                
                                                fullamount:{
                                                
                                                    type:String,
                                                    required:true
                                                    },
                                                    payedfull:{
                                                
                                                        type:String,
                                                        required:true
                                                        },
                                                        payedbranch:{
                                                
                                                            type:String,
                                                            required:true
                                                            }


});

module.exports = mongoose.model('Transport',transportSchema);