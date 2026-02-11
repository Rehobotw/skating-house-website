const express=require("express");
const {body}=require("express-validator");
const router=express.Router();
const controller=require("../controllers/contentController");
const auth= require("../middleware/auth");
const validateRequest = require("../middleware/validateRequest");

router.get("/",controller.getAll);
router.put(
	"/:section",
	auth,
	[body("content").exists()],
	validateRequest,
	controller.updateSection
);

module.exports=router;