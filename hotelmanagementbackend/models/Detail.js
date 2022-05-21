const mongoose = require('mongoose');
const detailSchema = new mongoose.Schema({

Employee_Name:{
  type:String,
  required:true
},

Employee_Type:{
    type:String,
    required:true
},
Address:{
    type:String,
    required:true
},
Age:{
    type:String,
    required:true
},
NIC_Number:{
  type:String,
  required:true
},
Email_Address:{
    type:String,
    required:true
},
Contact_Number:{
  type:String,
  required:true
}


});

module.exports = mongoose.model('Detail',detailSchema);