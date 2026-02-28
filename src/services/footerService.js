const footer = require("../models/Footer");

const getAllContent = () => footer.find({});

const updateSection = (socialLinks) =>
    footerContent.findOneAndUpdate(
        { socialLinks, updatedAt: Date.now() },
        { upsert: true, new: true }
    );
module.exports = {
    getAllContent,
    updateSection,
};
