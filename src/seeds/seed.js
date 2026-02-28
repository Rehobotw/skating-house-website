require("dotenv").config();
const connectDB = require("../config/db");
const Admin = require("../models/Admin");
const hero = require("../models/Hero");
const about= require("../models/About");
const session=require("../models/Session");
const Pricing = require("../models/Pricing");
// const gallery=require("../models/Gallery");
const ContactInfo = require("../models/ContactInfo");
const footer=require("../models/Footer");
const { heroSeed,aboutSeed,sessionSeed, pricingSeed,contactInfoSeed,footerSeed } = require("./seedData");

(async () => {
    try {
        await connectDB();

        await Promise.all([
            Admin.deleteMany({}),
            hero.deleteMany({}),
            about.deleteMany({}),
            session.deleteMany({}),
            Pricing.deleteMany({}),
            // gallery.deleteMany({}),
            ContactInfo.deleteMany({}),
            footer.deleteMany({}),
        ]);

        await Admin.create({
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD,
        });

        await hero.create(heroSeed);
        await about.create(aboutSeed);
        await session.create(sessionSeed);
        await Pricing.create(pricingSeed);
        // await gallery.create(gallerySeed);
        await ContactInfo.create(contactInfoSeed);
        await footer.create(footerSeed);

        console.log("Seeding completed");
        process.exit(0);
    } catch (err) {
        console.error("Seeding error:", err);
        process.exit(1);
    }
})();
