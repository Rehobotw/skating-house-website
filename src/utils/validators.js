const { body } = require("express-validator");

// Common validation chains shared across routes

// Email must be a valid address
const emailValidator = body("email").isEmail().normalizeEmail();

// Password must be provided (no additional strength rules by default)
const passwordRequired = body("password").exists();

// Password with basic length requirement (for login, etc.)
const passwordValidator = body("password")
	.isString()
	.isLength({ min: 6 });

// Generic content field presence check
const contentValidator = body("content").exists();

module.exports = {
	emailValidator,
	passwordRequired,
	passwordValidator,
	contentValidator,
};
