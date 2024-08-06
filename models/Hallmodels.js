const mongoose=require("mongoose");

const HallSchema=mongoose.Schema({
   HallName:{
        type:String,
            require:true,

    },
    
    Totlerooms:{
        type:String,
            require:true,

    },
    Roomsfacility:{
        type:String,
            require:true,

    },
    Onehourroomrent:{
        type:String,
        require:true,
    },
    
});

module.exports=mongoose.model("Halldata",HallSchema);