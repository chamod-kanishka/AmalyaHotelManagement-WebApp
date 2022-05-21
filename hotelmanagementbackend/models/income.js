const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    income:{

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

module.exports = mongoose.model('income',postSchema);