
const {GET, CREATE}=require("../Router/Halldatarouter");
const Halldata=require("express").Router();

 Halldata.get("/",GET);
 Halldata.post("/Create",CREATE);
    
module.exports=Halldata; 
 
 

