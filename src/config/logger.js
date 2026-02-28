const morgan = require("morgan");
const defaults = require("./defaults");

// HTTP request logger middleware (used in Express app)
const requestLogger = morgan(
	defaults.isProd ? "combined" : "dev"
);

// Simple application-level logger helpers
const log = {
	info: (...args) => console.log("[INFO]", ...args),
	error: (...args) => console.error("[ERROR]", ...args),
	warn: (...args) => console.warn("[WARN]", ...args),
};

module.exports = {
	requestLogger,
	log,
};

