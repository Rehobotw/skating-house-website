const express=require("express");
const router=express.Router();
const footerController=require("../controllers/footerController");
const auth= require("../middleware/auth");
const validateRequest = require("../middleware/validateRequest");
const { contentValidator } = require("../utils/validators");

router.get("/",footerController.getAll);
router.put(
    "/:section",
    auth,
    [contentValidator],
    validateRequest,
    footerController.update
);

module.exports=router;