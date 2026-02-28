const express=require("express");
const router=express.Router();
const heroController=require("../controllers/heroController");
const auth= require("../middleware/auth");
const validateRequest = require("../middleware/validateRequest");
const { contentValidator } = require("../utils/validators");

router.get("/",heroController.getAll);
router.put(
	"/:section",
	auth,
	[contentValidator],
	validateRequest,
	heroController.updateSection
);

module.exports=router;