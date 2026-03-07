const { signToken } = require("../utils/jwt");

// Authenticate against a single hard-coded admin account
// configured via environment variables (no DB lookups).
const loginAdmin = async (email, password) => {
	const adminEmail = process.env.ADMIN_EMAIL;
	const adminPassword = process.env.ADMIN_PASSWORD;

	if (!adminEmail || !adminPassword) {
		throw new Error("Admin credentials are not configured on the server");
	}

	if (email !== adminEmail || password !== adminPassword) {
		return null;
	}

	const token = signToken({ role: "admin" });
	return { token };
};

module.exports = { loginAdmin };

