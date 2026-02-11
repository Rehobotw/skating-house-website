// Centralized configuration defaults

require("dotenv").config();

const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
	env: NODE_ENV,
	isProd: NODE_ENV === "production",
	port: process.env.PORT || 5000,
	mongoUri: process.env.MONGODB_URI || process.env.MONGO_URI || "mongodb://127.0.0.1:27017/skating_house",
	corsOrigin: process.env.CORS_ORIGIN || "*",
	jwt: {
		secret: process.env.JWT_SECRET || "change_me_in_env",
		expiresIn: process.env.JWT_EXPIRES_IN || "8h",
	},
	logging: {
		level: process.env.LOG_LEVEL || (NODE_ENV === "production" ? "info" : "debug"),
	},
};

