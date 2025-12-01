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
const allMarketDataRouter = require("./routes/AllMarketData")
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",  // your React frontend
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Frontend connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Frontend disconnected:", socket.id);
  });
});

module.exports = io;


main().then(async()=>{
    console.log("connected to db at index.js");
    // await AllMarket.deleteMany({});
    await seedMarketData();
 
}).catch(e=>{
    console.log("error in connecting to db in index.js: ",e);
})

// -----------------------------------------
const makeRandomizer = require('./utilFunctions/ltpRandomizer'); // adjust path
const randomizer = makeRandomizer();
const controller = randomizer.start(io, { intervalMs: 3000, maxPercent: 1, verbose: true });


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
app.use("/api/marketData",allMarketDataRouter);


app.get("/", (req,res)=>{
    res.send("root is working");
})