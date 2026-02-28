const { verifyToken } = require("../utils/jwt");
const Admin = require("../models/Admin");

module.exports = async (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const token = auth.split(" ")[1];
    try {
        const payload = verifyToken(token);
        req.admin = await Admin.findById(payload.id).select("-password");
        if (!req.admin) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        next();
    } catch (err) {
        res.status(401).json({ error: "Invalid token" });
    }
};