const express = require("express")
const app = express();
const port = 5000;
const cors = require("cors")
const main = require("./db"); 
const authRouter = require("./routes/UserRouter")
const seedMarketData = require("./utilFunctions/seedingMarketData")
const AllMarket  = require("./models/AllMarketData")
const watchlistRouter = require("./routes/WatchList")
const positionRouter = require("./routes/Positions");
const holdingRouter = require("./routes/Holdings")
const openOrderRouter = require("./routes/OpenOrder")
const totalOrderRouter = require("./routes/TotalOrders")
const transactionRouter = require("./routes/Transactions")
const tradebookRouter = require("./routes/Tradebook")

main().then(async()=>{
    console.log("connected to db at index.js");
    // await AllMarket.deleteMany({});
    await seedMarketData();
 
}).catch(e=>{
    console.log("error in connecting to db in index.js: ",e);
})
app.listen(port, ()=>{ 
    console.log("app is listening")
})
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/watchlist", watchlistRouter);
app.use("/api/position",positionRouter);
app.use("/api/holding",holdingRouter);
app.use("/api/openOrder",openOrderRouter);
app.use("/api/totalOrder",totalOrderRouter);
app.use("/api/transaction",transactionRouter);
app.use("/api/tradebook",tradebookRouter);


app.get("/", (req,res)=>{
    res.send("root is working");
})