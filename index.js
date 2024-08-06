const express=require("express");
const http=express();
const cors=require("cors");
const bodyparser=require("body-parser");
const {connectToDatabase}=require('./database/data');
const dotenv=require("dotenv")

connectToDatabase();
http.use(cors());
dotenv.config()
http.use(express.json()),
http.use(bodyparser.json()),
http.set("view engine","ejs");
http.get('/',(req,res)=>
{
    res.send("server running..")
}
)
http.use('/api/Halldata',require("./countroloers/Hallcountroloer"));
http.use('/api/Customerdata',require("./countroloers/Customercountroler"));
  console.log(process.env.PORT)  
http.listen (process.env.PORT,()=>{
    console.log("starting...7000");
});