const aboutContent = require("../models/About");

const getAllContent = () => aboutContent.find({});

const updateSection = (title, content) =>
	aboutContent.findOneAndUpdate(
		{ content, updatedAt: Date.now() },
		{ upsert: true, new: true }
	);
module.exports = {
	getAllContent,
	updateSection,
};
