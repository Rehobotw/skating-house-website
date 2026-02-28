const express= require("express");
const router=express.Router();
const pricingcontroller=require("../controllers/pricingController");
const auth=require('../middleware/auth');
const validateRequest = require("../middleware/validateRequest");

router.get("/",pricingcontroller.getAll);
router.put("/:id",auth,validateRequest,pricingcontroller.update);

module.exports=router;