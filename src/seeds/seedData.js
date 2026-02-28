// Central seed data definitions for the Skating House backend.

const ContactInfo = require("../models/ContactInfo");

const heroSeed = {
  title: "Lace Up. Step Out.Roller Skate.", 
  content: "Roll into the thrill of roller skating — gear up, hit the streets, and join a community that lives for style, movement, and fun." 
	
};


const aboutSeed = {
	content:"we're all about roller skating- the movement, the culture, and the freedom. built for skaters of all levels, we exist to support style, confidence , and community on every ride",	
};
const sessionSeed = [
	{ title: "Monday - sunday", content:"7:00 am - 6:00 pm" },
	
];
const pricingSeed = {
	basic:{ title: "1 hour pass", body:"Skate access + music" ,price:"200"},
	premium:{ title: "monthly pass", body:"Skate access + music" ,price:"200"},
	family:{ title: "private session", body:"Skate access + music" ,price:"200"}
	
};
// const gallerySeed = [
	
// ];
const contactInfoSeed = {
	socialLinks:{ facebook: "facebook.com", tiktok:"super_skate_hawassa" ,telegram:"telegram.com"},
	ContactAdress:{ phone: "+251 91234 5678 99", address:"Hayk BLDG. 5th Floor, Hawassa, Ethiopia" ,googleMapLink:"telegram"},
};
const footerSeed = {
	socialLinks:{ facebook: "facebook.com", tiktok:"super_skate_hawassa" ,telegram:"telegram.com"},
	
};

module.exports = {
	heroSeed,
	aboutSeed,
	sessionSeed,
	pricingSeed,
	contactInfoSeed,
	footerSeed
};

