const Footer = require("../models/Footer");

// Return the single footer document (or null if none exists yet)
const getAllContent = () => Footer.findOne({});

// Update footer content in-place (create once, then always update that same doc)
const updateFooterService = (data) =>
    Footer.findOneAndUpdate({}, data, { upsert: true, new: true });

module.exports = {
    getAllContent,
    updateFooterService,
};
