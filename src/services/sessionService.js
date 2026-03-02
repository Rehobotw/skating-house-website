const sessionContent = require("../models/Session");

// Treat session as a single content block
const getAllContent = () => sessionContent.findOne({});

const updateSection = (title,content) => {
    return sessionContent.findOneAndUpdate(
        {},
        { title,content, updatedAt: Date.now() },
        { upsert: true, new: true }
    );
};

module.exports = {
    getAllContent,
    updateSection,
};
