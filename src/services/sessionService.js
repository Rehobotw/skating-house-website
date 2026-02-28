const sessionContent = require("../models/Session");

const getAllContent = () => sessionContent.find({});

const updateSection = (title, content) =>{
   return sessionContent.findOneAndUpdate(
        { title:title},
        { content, updatedAt: Date.now() },
        { upsert: true, new: true }
    );
};
module.exports = {
    getAllContent,
    updateSection,
};
