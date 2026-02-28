const Admin = require("../models/Admin");
const { signToken } = require("../utils/jwt");

const loginAdmin = async (email, password) => {
	const admin = await Admin.findOne({ email });
	if (!admin) return null;

	const ok = await admin.comparePassword(password);
	if (!ok) return null;

	const token = signToken({ id: admin._id });
	return { token };
};

module.exports = {loginAdmin,};

