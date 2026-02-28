const express=require("express");
const router=express.Router();
const {login}=require("../controllers/authController");
const validateRequest = require("../middleware/validateRequest");
const { emailValidator, passwordValidator } = require("../utils/validators");

router.post(
    "/login",
    [emailValidator, passwordValidator],
    validateRequest,
    login
);

module.exports=router;