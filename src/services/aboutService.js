const aboutContent = require("../models/About");

// About is a single, simple document with just `content`
const getAllContent = () => aboutContent.findOne({});

// Update the single About document (create if missing)
const updateSection = (content) =>
	aboutContent.findOneAndUpdate(
		{},
		{ content },
		{ upsert: true, new: true }
	);
module.exports = {
	getAllContent,
	updateSection,
};
