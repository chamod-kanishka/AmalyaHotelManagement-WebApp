const mongoose = require('mongoose');

const summarytableSchema = new mongoose.Schema({

Customer_Name:{

type:String,
required:true
},
    
    Contact:{

        type:Number,
        required:true
        },

                Item_Code:{

                    type:String,
                    required:true
                    },

                    Item_Name:{

                        type:String,
                        required:true
                        },

                        Description:{

                            type:String,
                            required:true
                            },

                            Price:{

                                type:String,
                                required:true
                                },

                                Quantity:{

                                    type:Number,
                                    required:true
                                    },

                                    Date:{

                                        type:String,
                                        required:true
                                        },

                                        UpdateOrder:{
                                            type:String,
                                            required:true

                                        },
                                                
                                                                       
});

module.exports = mongoose.model('SummaryTable',summarytableSchema);