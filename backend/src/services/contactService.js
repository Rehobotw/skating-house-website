const ContactInfo = require("../models/ContactInfo");

const getContactInfo = () => ContactInfo.findOne({});

const updateContactInfo = (data) =>
	ContactInfo.findOneAndUpdate({}, data, { upsert: true, new: true });

module.exports = {
	getContactInfo,
	updateContactInfo,
};

