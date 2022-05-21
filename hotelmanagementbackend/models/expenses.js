const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    expense:{

      type:String,
      required:true
   },

    cost:{

      type:Number,
      required:true
    },

    management:{
      
      type:String,
      required:true
    },
    
    date:{

        type:Date,
        required:true
    }


});

module.exports = mongoose.model('expenses',postSchema);