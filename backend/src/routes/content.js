const express=require("express");
const {body}=require("express-validator");
const router=express.Router();
const controller=require("../controllers/contentController");
const auth= require("../middleware/auth");

router.get("/",controller.getAll);
router.put("/:section",auth,[body("content").exists()],controller.updateSection);

module.exports=router;