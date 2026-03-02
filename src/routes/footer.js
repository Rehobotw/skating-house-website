const express=require("express");
const router=express.Router();
const footerController=require("../controllers/footerController");

router.get("/",footerController.getAll);
router.put("/", footerController.update);

module.exports=router;