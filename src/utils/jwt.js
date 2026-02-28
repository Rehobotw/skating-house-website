const jwt = require("jsonwebtoken");
const defaults = require("../config/defaults");

const { secret, expiresIn } = defaults.jwt;

const signToken = (payload, options = {}) =>
	jwt.sign(payload, secret, { expiresIn, ...options });

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = {
	signToken,
	verifyToken,
};

