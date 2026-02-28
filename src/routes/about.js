const express=require("express");
const router=express.Router();
const aboutController=require("../controllers/aboutController");
const auth= require("../middleware/auth");
const validateRequest = require("../middleware/validateRequest");
const { contentValidator } = require("../utils/validators");

router.get("/",aboutController.getAll);
router.put(
    "/:section",
    auth,
    [contentValidator],
    validateRequest,
    aboutController.updateSection
);

module.exports=router;