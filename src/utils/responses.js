// Generic response helper utilities.

const sendSuccess = (res, data, status = 200) => {
	return res.status(status).json(data);
};

const sendError = (res, error, status = 500) => {
	return res.status(status).json({ error });
};

module.exports = {
	sendSuccess,
	sendError,
};
