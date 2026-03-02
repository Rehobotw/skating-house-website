const express=require("express");
const router=express.Router();
const aboutController=require("../controllers/aboutController");
const validateRequest = require("../middleware/validateRequest");
const { contentValidator } = require("../utils/validators");

router.get("/",aboutController.getAll);
router.put(
    "/",
    [contentValidator],
    validateRequest,
    aboutController.updateSection
);

module.exports=router;