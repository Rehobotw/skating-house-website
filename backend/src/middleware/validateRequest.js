const { validationResult } = require("express-validator");

// Collects validation errors from express-validator and returns 400 if any.
module.exports = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	next();
};

