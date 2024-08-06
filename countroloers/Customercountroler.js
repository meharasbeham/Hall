const {GET,CREATE}=require("../Router/Customerdatarouter");
const Customerdata=require("express").Router();

 Customerdata.get("/",GET);
 Customerdata.post("/Create",CREATE);
 
 module.exports=Customerdata; 
 
 