const Pricing = require("../models/Pricing");

const getActivePricing = () => Pricing.find();

const updatePricing = (data) =>
	Pricing.findOneAndUpdate({},data, { upsert: true, new: true });

module.exports = {
	getActivePricing,
	updatePricing,
};

