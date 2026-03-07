const express=require("express");
const router=express.Router();
const {login}=require("../controllers/authController");
const validateRequest = require("../middleware/validateRequest");
const { emailValidator, passwordValidator } = require("../utils/validators");

// Simple health-check for the auth route (useful when hitting it in a browser)
router.get("/", (req, res) => {
    res.json({ message: "Auth endpoint is up" });
});

router.post(
    "/",
    [emailValidator, passwordValidator],
    validateRequest,
    login
);

module.exports=router;