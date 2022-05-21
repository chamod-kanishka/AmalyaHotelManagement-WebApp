const mongoose = require('mongoose');

const menutableSchema = new mongoose.Schema({

                Item_Code:{

                    type:String,
                    required:true
                    },

                    Item_Name:{

                        type:String,
                        required:true
                        },
                        Unit_Price:{
                                            
                            type:Number,
                            required:true
                            },
                            Category:{
                                            
                                type:String,
                                required:true
                                },
                                        Date:{

                                        type:String,
                                        required:true
                                        }
                                                
                                                
                                                    
                                            
                                                        
});

module.exports = mongoose.model('MenuTable',menutableSchema);