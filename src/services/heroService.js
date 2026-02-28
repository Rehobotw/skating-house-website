const heroContent = require("../models/Hero");

const getAllContent = () => heroContent.find({});

const updateSection = (title, content) =>
	heroContent.findOneAndUpdate(
		{ title },
		{ content, updatedAt: Date.now() },
		{ upsert: true, new: true }
	);
module.exports = {
	getAllContent,
	updateSection,
};

