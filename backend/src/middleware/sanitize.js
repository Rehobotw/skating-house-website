const mongoSanitize = require("express-mongo-sanitize");

// Reusable sanitize middleware instance; can be used on specific routes if desired.
module.exports = mongoSanitize({ sanitizeReqQuery: false });

