require("dotenv").config();
const connectDB = require("../config/db");
const Admin = require("../models/Admin");
const SiteContent = require("../models/SiteContent");
const Pricing = require("../models/Pricing");
const ContactInfo = require("../models/ContactInfo");
const { siteContentSeed, pricingSeed, contactInfoSeed } = require("./seedData");

(async () => {
    try {
        await connectDB();

        await Promise.all([
            Admin.deleteMany({}),
            SiteContent.deleteMany({}),
            Pricing.deleteMany({}),
            ContactInfo.deleteMany({}),
        ]);

        await Admin.create({
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD,
        });

        await SiteContent.create(siteContentSeed);
        await Pricing.create(pricingSeed);
        await ContactInfo.create(contactInfoSeed);

        console.log("Seeding completed");
        process.exit(0);
    } catch (err) {
        console.error("Seeding error:", err);
        process.exit(1);
    }
})();
