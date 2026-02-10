const express=require("express");
const {body}=require("express-validator");
const router=express.Router();
const controller=require("../controllers/adminContoller");
const auth= require("../middleware/auth");

router.get("/",controller.getAll);
router.put("/:email",auth,[body("password").exists()],controller.updatePassword);

module.exports=router;