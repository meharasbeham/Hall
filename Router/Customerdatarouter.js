
const Customermodels=require("../models/Customermodels");

function GET(req,res,next){
    Customermodels.find({Repeatcustomer:true})
     .then ((response)=>{
        if (response.length<1){
            return res.status(200).json({
                success:true,
                data:response,
                message:"No datas found",
            
            });
                     
        }else
        {
            return res.status(200).json({
                success:true,
                data:response,
               message:"data fetched successfully",
            });
        }
    })

    .catch((e)=>{
        return res.status(402).json({
            success:false,
            data:response,
            message:"something went wrong",
        });
    });
}

function PUT(req,res,next){
    Customermodels.find()
.then ((response)=>{
    const id=Number(req.params.id)
    if (response.length<1){
        data.splice(id,1,req.body)
        return res.status(200).json({
            success:true,
            data:response,
            message:" datas edited successfully",
        
        });
    }
})

.catch((e)=>{
    return res.status(402).json({
        success:false,
        erroe:e,
        message:"something went wrong",
    });
});
}

async function CREATE(req,res,next){
const newCustomer= await Customermodels.create(req.body);
newCustomer
.save()
.then((response)=>{
    return res.status(200).json({
        success:true,
        data:response,
     message:"already creating datas",

    });


{

    return res.status(200).json({
        success:true,
        data:response,
       message:"data created successfully",
    });
}
})
   .catch((error)=>{
        res.status(500).json({
            success:false,
            message:"all ready booked",
            error:error,
        });
      });

    }
module.exports={
    GET,
    PUT,
    CREATE,
};