const { loginAdmin } = require("../services/authService");

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const result = await loginAdmin(email, password);

        if (!result) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        res.json(result);
    } catch (err) {
        next(err);
    }
};