const express= require("express");
const router=express.Router();
const controller=require("../controllers/pricingController");
const auth=require('../middleware/auth');

router.get("/",controller.getAll);
router.put("/:id",auth,controller.update);

module.exports=router;