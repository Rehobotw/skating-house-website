const heroContent = require("../models/Hero");

// Treat hero as a single content block
const getAllContent = () => heroContent.findOne({});

const updateSection = (title,content) =>
	heroContent.findOneAndUpdate(
		{},
		{ title,content, updatedAt: Date.now() },
		{ upsert: true, new: true }
	);

module.exports = {
	getAllContent,
	updateSection,
};

