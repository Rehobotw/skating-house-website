const { log } = require("../config/logger");

// Centralized Express error handler
// Must be registered after all routes.
module.exports = (err, req, res, next) => {
	const status = err.status || err.statusCode || 500;
	const message = err.message || "Server error";

	if (status >= 500) {
		log.error("Unhandled error", { error: err.stack || err });
	} else {
		log.warn("Handled error", { status, message });
	}

	res.status(status).json({ error: message });
};

