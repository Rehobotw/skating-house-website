const express=require("express");
const router=express.Router();
const contactController=require("../controllers/contactController");

router.get("/",contactController.get);
router.put("/", contactController.update);

module.exports=router;