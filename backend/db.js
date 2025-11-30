const mongoose = require('mongoose');
async function main() {
    
    await mongoose.connect('mongodb+srv://soniyashika1619:wPmFDmxKDqQnpeLA@stocktradingplatform.jqqj5hg.mongodb.net/papertrade?appName=StockTradingPlatform');
}

module.exports = main;