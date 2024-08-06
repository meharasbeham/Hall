const  mongoose  = require("mongoose");

const Customerschema=mongoose.Schema({
customername:{
    type:String,
    require:true,
},
roomnumber:{
    type:String,
    require:true,
},
date:{
    type:String,
    require:true,
},
starttime:{
    type:String,
    require:true,
},
endtime:{
    type:String,
    reuire:true,
},

Repeatcustomer:{
    type:String,
    require:true,
},

bookingstatus:{
    type:Boolean,
    require:true,
      
},
});

module.exports=mongoose.model("Customerdata",Customerschema);