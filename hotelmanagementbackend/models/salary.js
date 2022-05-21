const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    memberid:{

      type:String,
      required:true
   },

   NIC:{

      type:Number,
      required:true
   },

      
   phoneno:{

      type:Number,
      required:true
   },

    basicsalary:{

      type:Number,
      required:true
    },
    
    bonussalary:{

        type:Number,
        required:true
    },

    loaninstalment:{

       type:Number,
       required:true
    },

    finalpayments:{

      type:Number,
      required:true
   }

});

module.exports = mongoose.model('salary',postSchema);