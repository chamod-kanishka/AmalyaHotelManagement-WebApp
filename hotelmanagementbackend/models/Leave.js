const mongoose = require('mongoose');
const leaveSchema = new mongoose.Schema({

Employee_Name:{
  type:String,
  required:true
},

Employee_Type:{
    type:String,
    required:true
},
Reason:{
    type:String,
    required:true
},
Date:{
  type:String,
  required:true
},
Special_Notes:{
  type:String,
  required:true
}


});

module.exports = mongoose.model('Leave',leaveSchema);