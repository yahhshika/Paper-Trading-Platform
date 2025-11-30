const allStocksData = require("./dummyMarketData");
const AllMarket = require("../models/AllMarketData");
const seedMarketData = async () => {
  try {
    const count = await AllMarket.countDocuments();

    if (count === 0) {
      console.log("Seeding market data...");
      await AllMarket.insertMany(allStocksData);
      console.log("Market data seeded successfully.");
    } else {
      console.log("Market data already exists. Skipping seeding.");
    }
  } catch (err) {
    console.error("Error seeding market data:", err);
  }
};
module.exports = seedMarketData;
