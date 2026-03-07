const { verifyToken } = require("../utils/jwt");

// Auth middleware for a single hard-coded admin account.
// Verifies the JWT and attaches a simple admin object; no DB lookup.
module.exports = async (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const token = auth.split(" ")[1];
    try {
        const payload = verifyToken(token);
        if (payload.role !== "admin") {
            return res.status(401).json({ error: "Unauthorized" });
        }

        // Attach minimal admin info; actual credentials remain in env.
        req.admin = { role: "admin", email: process.env.ADMIN_EMAIL };
        next();
    } catch (err) {
        res.status(401).json({ error: "Invalid token" });
    }
};