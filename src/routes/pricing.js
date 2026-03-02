const express= require("express");
const router=express.Router();
const pricingcontroller=require("../controllers/pricingController");

router.get("/",pricingcontroller.getAll);
router.put("/:id", pricingcontroller.update);

module.exports=router;