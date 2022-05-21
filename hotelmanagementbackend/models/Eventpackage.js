const mongoose = require('mongoose');

const eventpackageSchema = new mongoose.Schema({

    

Category:{

    type:String,
    required:true
    },
    
    Capacity:{

        type:String,
        required:true
        },

        SelectHalls:{

            type:String,
            required:true
            },

            Serving:{

                type:String,
                required:true
                },

                SelectSeatingStyles:{

                    type:String,
                    required:true
                    },

                    
                    DecorationInformations:{

                    type:String,
                    required:true
                    },

                    AddServices:{

                        type:String,
                        required:true
                        },

                        AdditionalServices:{

                            type:String,
                            required:true
                            },

                            DiscribeYourEvent:{

                                type:String,
                                required:true
                                },



});

module.exports = mongoose.model('Eventpackage',eventpackageSchema);