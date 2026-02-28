const express=require("express");
const router=express.Router();
const controller=require("../controllers/adminContoller");
const auth= require("../middleware/auth");
const { passwordRequired } = require("../utils/validators");

router.get("/",controller.getAll);
router.put("/:email",auth,[passwordRequired],controller.updatePassword);

module.exports=router;