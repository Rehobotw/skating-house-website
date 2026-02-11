const SiteContent = require("../models/SiteContent");

const getAllContent = () => SiteContent.find({});

const updateSection = (section, content) =>
	SiteContent.findOneAndUpdate(
		{ section },
		{ content, updatedAt: Date.now() },
		{ upsert: true, new: true }
	);

module.exports = {
	getAllContent,
	updateSection,
};

