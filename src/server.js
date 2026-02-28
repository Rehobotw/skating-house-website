require("dotenv").config();
const connectDB = require("./config/db");
const defaults = require("./config/defaults");
const app = require("./app");

const start = async () => {
  try {
    await connectDB();
    const PORT = defaults.port;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server", err);
    process.exit(1);
  }
};

start();


