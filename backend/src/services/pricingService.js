const Pricing = require("../models/Pricing");

const getActivePricing = () => Pricing.find({ active: true });

const updatePricing = (id, data) =>
	Pricing.findByIdAndUpdate(id, data, { new: true });

module.exports = {
	getActivePricing,
	updatePricing,
};

