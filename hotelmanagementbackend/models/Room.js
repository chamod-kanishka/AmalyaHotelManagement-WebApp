const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({


    RoomTitle:{

type:String,
required:true
},

RoomNumber:{

    type:Number,
    required:true
    },
    
    RoomShortCode:{

        type:String,
        required:true
        },
 
        BedType:{

            type:String,
            required:true
            },

            Description:{

                type:String,
                required:true
                },

                NumberOfMaximumPersons:{

                    type:Number,
                    required:true
                    },

                    ExtraBed:{

                        type:String,
                        required:true
                        },

                            CleanningStatus:{

                                type:String,
                                required:true
                                },

                                BasePrice:{

                                    type:String,
                                    required:true
                                    },

                                    AdditionalPersonPrice:{

                                        type:String,
                                        required:true
                                        },

                                        ExtraBedPrice:{

                                            type:String,
                                            required:true
                                            },

                                            Discount:{

                                                type:String,
                                                required:true
                                                },

                                                TotalBasePrice:{

                                                    type:String,
                                                    required:true
                                                    }
    

})

module.exports = mongoose.model('Room',roomSchema);