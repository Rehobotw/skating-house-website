const express=require("express");
const router=express.Router();
const sessionController=require("../controllers/sessionController");
const auth= require("../middleware/auth");
const validateRequest = require("../middleware/validateRequest");
const { contentValidator } = require("../utils/validators");

router.get("/",sessionController.getAll);
router.put(
    "/",
    // auth,
    [contentValidator],
    validateRequest,
    sessionController.update
);

module.exports=router;