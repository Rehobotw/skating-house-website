// Central seed data definitions for the Skating House backend.

const siteContentSeed = [
	{ section: "hero", content: { title: "Welcome", subtitle: "Skate with us" } },
	{ section: "about", content: { body: "About text" } },
];

const pricingSeed = [
	{ title: "Starter", price: 20, features: ["1 lesson"], active: true },
	{ title: "Pro", price: 50, features: ["5 lessons"], active: true },
];

const contactInfoSeed = {
	email: "info@example.com",
	phone: "+1-555-555",
	address: "Skating Street 1, City",
};

module.exports = {
	siteContentSeed,
	pricingSeed,
	contactInfoSeed,
};

