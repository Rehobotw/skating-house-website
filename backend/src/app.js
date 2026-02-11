const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const defaults = require("./config/defaults");
const { requestLogger } = require("./config/logger");
const errorHandler = require("./middleware/errorHandler");
const rateLimiter = require("./middleware/rateLimiter");

const app = express();

// Global middleware
app.use(helmet());
app.use(requestLogger);
app.use(cors({ origin: defaults.corsOrigin }));
app.use(express.json({ limit: "10kb" }));
app.use(mongoSanitize({ sanitizeReqQuery: false }));

// Basic rate limiting on all routes (can be narrowed to auth/contact if desired)
app.use(rateLimiter);

// Health check / root
app.get("/", (req, res) => {
	res.send("API is running 🚀");
});

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/content", require("./routes/content"));
app.use("/api/pricing", require("./routes/pricing"));
app.use("/api/contact", require("./routes/contact"));

// Central error handler
app.use(errorHandler);

module.exports = app;

