export const initialUserState = {
  userId: "U12345",
  name: "John Doe",
  username: "@johndoe",
  email: "johndoe@gmail.com",

  funds: {
    availableCash: 500000,
    collateral: 1000,
    currency: "INR",
  },

  // LAST 4 TRANSACTIONS ONLY → for quick preview
  recentTransactions: [
    {
      id: "TXN1001",
      date: "2025-01-12 10:23:45",
      type: "funds_added",
      amount: 5000,
      status: "successful",
      refNo: "DUMMY12987342",
      remarks: "Dummy funds added"
    },
    {
      id: "TXN1002",
      date: "2025-01-15 14:55:12",
      type: "withdrawal",
      amount: 2000,
      status: "pending",
      refNo: "DUMMY5432378",
      remarks: "Withdrawal initiated (paper mode)"
    },
    {
      id: "TXN1003",
      date: "2025-01-17 09:11:32",
      type: "funds_added",
      amount: 10000,
      status: "successful",
      refNo: "DUMMY40981273",
      remarks: "Funds added for paper trading"
    },
    {
      id: "TXN1004",
      date: "2025-01-19 18:02:10",
      type: "withdrawal",
      amount: 5000,
      status: "failed",
      refNo: "DUMMY9081231",
      remarks: "Withdrawal failed (test case)"
    }
  ],
};


// handles holdings, positions, watchlist
export const dummyMarketData = [
  {
    orderId: "ORD1001",
    source: "holding",
    symbol: "TCS",
    company: "Tata Consultancy Services",
    ltp: 3985.20,
    avgPrice: 3820.00,
    qty: 4,
    categories: ["holding"],
    dayChange: 45.20,
    dayChangePercent: 1.15,
    pnl: (3985.20 - 3820.00) * 4
  },

  {
    orderId: "ORD1002",
    source: "holding",
    symbol: "RELIANCE",
    company: "Reliance Industries Ltd",
    ltp: 2421.10,
    avgPrice: 2400.00,
    qty: 3,
    categories: ["holding"],
    dayChange: 5.30,
    dayChangePercent: 0.22,
    pnl: (2421.10 - 2400.00) * 3
  },

  {
    orderId: "ORD1003",
    source: "holding",
    symbol: "HDFCBANK",
    company: "HDFC Bank Ltd",
    ltp: 1623.80,
    avgPrice: 1588.00,
    qty: 5,
    categories: ["holding"],
    dayChange: 8.90,
    dayChangePercent: 0.55,
    pnl: (1623.80 - 1588.00) * 5
  },

  {
    orderId: "ORD1004",
    source: "position",
    symbol: "INFY",
    company: "Infosys Ltd",
    ltp: 1548.60,
    avgPrice: 1505.00,
    qty: 20,
    categories: ["position"],
    dayChange: -12.40,
    dayChangePercent: -0.79,
    pnl: (1548.60 - 1505.00) * 20
  },

  {
    orderId: "ORD1005",
    source: "position",
    symbol: "ICICIBANK",
    company: "ICICI Bank Ltd",
    ltp: 974.10,
    avgPrice: 1010.00,
    qty: 10,
    categories: ["position"],
    dayChange: 6.10,
    dayChangePercent: 0.63,
    pnl: (974.10 - 1010.00) * 10
  },

  {
    orderId: "ORD1006",
    source: "watchlist",
    symbol: "SBIN",
    company: "State Bank of India",
    ltp: 643.20,
    qty: 0,
    avgPrice: null,
    categories: ["watchlist"],
    dayChange: -3.50,
    dayChangePercent: -0.54,
    pnl: null
  },

  {
    orderId: "ORD1007",
    source: "watchlist",
    symbol: "HCLTECH",
    company: "HCL Technologies Ltd",
    ltp: 1474.50,
    qty: 0,
    avgPrice: null,
    categories: ["watchlist"],
    dayChange: 12.20,
    dayChangePercent: 0.83,
    pnl: null
  },

  {
    orderId: "ORD1008",
    source: "watchlist",
    symbol: "ASIANPAINT",
    company: "Asian Paints Ltd",
    ltp: 3088.20,
    qty: 0,
    avgPrice: null,
    categories: ["watchlist"],
    dayChange: 22.10,
    dayChangePercent: 0.72,
    pnl: null
  },

  {
    orderId: "ORD1009",
    source: "holding",
    symbol: "MARUTI",
    company: "Maruti Suzuki India Ltd",
    ltp: 11548.30,
    avgPrice: 10500.00,
    qty: 1,
    categories: ["holding", "watchlist"],
    dayChange: 125.10,
    dayChangePercent: 1.09,
    pnl: (11548.30 - 10500.00)
  },

  {
    orderId: "ORD1010",
    source: "position",
    symbol: "AXISBANK",
    company: "Axis Bank Ltd",
    ltp: 1032.10,
    avgPrice: 1135.50,
    qty: 8,
    categories: ["position", "watchlist"],
    dayChange: 11.60,
    dayChangePercent: 1.14,
    pnl: (1032.10 - 1135.50) * 8
  },

  // ✅ EXECUTED ORDER MOVED WITH SAME ID
  {
    orderId: "ORD3002",
    source: "position",
    symbol: "INFY",
    company: "Infosys Ltd",
    ltp: 1548.60,
    avgPrice: 1548.60,
    qty: 5,
    categories: ["position"],
    dayChange: -12.40,
    dayChangePercent: -0.79,
    pnl: 0
  },

  {
    orderId: "ORD3003",
    source: "holding",
    symbol: "SBIN",
    company: "State Bank of India",
    ltp: 643.20,
    avgPrice: 643.20,
    qty: 12,
    categories: ["holding"],
    dayChange: -3.50,
    dayChangePercent: -0.54,
    pnl: 0
  },
  // Executed: ORD2010 → BUY COALINDIA → HOLDING
{
  orderId: "ORD2010",
  source: "holding",
  symbol: "COALINDIA",
  company: "Coal India",
  ltp: 390.75,
  avgPrice: 390.75,
  qty: 20,
  categories: ["holding"],
  dayChange: -4.25,
  dayChangePercent: -1.07,
  pnl: 0
},

// Executed: ORD2011 → BUY ICICIBANK → HOLDING
{
  orderId: "ORD2011",
  source: "holding",
  symbol: "ICICIBANK",
  company: "ICICI Bank",
  ltp: 974.10,
  avgPrice: 970,
  qty: 10,
  categories: ["holding"],
  dayChange: 6.10,
  dayChangePercent: 0.63,
  pnl: (974.10 - 970) * 10
},

// Executed: ORD2012 → SELL HCLTECH → POSITION
{
  orderId: "ORD2012",
  source: "position",
  symbol: "HCLTECH",
  company: "HCL Technologies",
  ltp: 1474.50,
  avgPrice: 1474.50,
  qty: 4,
  categories: ["position"],
  dayChange: 12.20,
  dayChangePercent: 0.83,
  pnl: 0
}

];



//handles the umbrella stock vision:

export const allStocksData = [
  { symbol: "TCS", company: "Tata Consultancy Services", ltp: 3985.20, dayChange: +45.20, dayChangePercent: +1.15 },
  { symbol: "INFY", company: "Infosys Ltd", ltp: 1548.60, dayChange: -12.40, dayChangePercent: -0.79 },
  { symbol: "RELIANCE", company: "Reliance Industries", ltp: 2421.10, dayChange: +5.30, dayChangePercent: +0.22 },
  { symbol: "HDFCBANK", company: "HDFC Bank", ltp: 1623.80, dayChange: +8.90, dayChangePercent: +0.55 },
  { symbol: "SBIN", company: "State Bank of India", ltp: 643.20, dayChange: -3.50, dayChangePercent: -0.54 },
  { symbol: "ICICIBANK", company: "ICICI Bank", ltp: 974.10, dayChange: +6.10, dayChangePercent: +0.63 },
  { symbol: "LT", company: "Larsen & Toubro", ltp: 3298.75, dayChange: -18.35, dayChangePercent: -0.55 },
  { symbol: "ITC", company: "ITC Ltd", ltp: 439.60, dayChange: +2.10, dayChangePercent: +0.48 },
  { symbol: "BAJAJFINSV", company: "Bajaj Finserv", ltp: 1665.25, dayChange: +12.95, dayChangePercent: +0.78 },
  { symbol: "COALINDIA", company: "Coal India", ltp: 390.75, dayChange: -4.25, dayChangePercent: -1.07 },

  { symbol: "MARUTI", company: "Maruti Suzuki", ltp: 11548.30, dayChange: +125.10, dayChangePercent: +1.09 },
  { symbol: "TITAN", company: "Titan Company", ltp: 3325.50, dayChange: -18.40, dayChangePercent: -0.55 },
  { symbol: "HINDUNILVR", company: "Hindustan Unilever", ltp: 2520.40, dayChange: +14.20, dayChangePercent: +0.57 },
  { symbol: "ASIANPAINT", company: "Asian Paints", ltp: 3088.20, dayChange: +22.10, dayChangePercent: +0.72 },
  { symbol: "ULTRACEMCO", company: "UltraTech Cement", ltp: 9560.10, dayChange: -75.50, dayChangePercent: -0.78 },
  { symbol: "NESTLEIND", company: "Nestle India", ltp: 24750.80, dayChange: +180.60, dayChangePercent: +0.73 },
  { symbol: "BAJFINANCE", company: "Bajaj Finance", ltp: 6950.35, dayChange: -52.40, dayChangePercent: -0.74 },
  { symbol: "AXISBANK", company: "Axis Bank", ltp: 1032.10, dayChange: +11.60, dayChangePercent: +1.14 },
  { symbol: "KOTAKBANK", company: "Kotak Mahindra Bank", ltp: 1842.25, dayChange: -9.40, dayChangePercent: -0.51 },
  { symbol: "SUNPHARMA", company: "Sun Pharma", ltp: 1198.90, dayChange: +6.75, dayChangePercent: +0.57 },

  { symbol: "DRREDDY", company: "Dr Reddy’s Labs", ltp: 5640.30, dayChange: +42.10, dayChangePercent: +0.75 },
  { symbol: "WIPRO", company: "Wipro", ltp: 443.50, dayChange: -4.60, dayChangePercent: -1.02 },
  { symbol: "TECHM", company: "Tech Mahindra", ltp: 1289.10, dayChange: +15.80, dayChangePercent: +1.24 },
  { symbol: "M&M", company: "Mahindra & Mahindra", ltp: 1812.40, dayChange: -11.20, dayChangePercent: -0.61 },
  { symbol: "POWERGRID", company: "Power Grid Corp", ltp: 255.70, dayChange: +2.40, dayChangePercent: +0.94 },
  { symbol: "ADANIENT", company: "Adani Enterprises", ltp: 2835.20, dayChange: -32.90, dayChangePercent: -1.15 },
  { symbol: "ADANIPORTS", company: "Adani Ports", ltp: 812.65, dayChange: +6.40, dayChangePercent: +0.79 },
  { symbol: "ONGC", company: "ONGC", ltp: 204.50, dayChange: -1.80, dayChangePercent: -0.88 },
  { symbol: "BHARTIARTL", company: "Bharti Airtel", ltp: 980.20, dayChange: +8.20, dayChangePercent: +0.84 },
  { symbol: "JSWSTEEL", company: "JSW Steel", ltp: 879.40, dayChange: -7.50, dayChangePercent: -0.85 },

  { symbol: "BPCL", company: "Bharat Petroleum", ltp: 583.25, dayChange: +5.40, dayChangePercent: +0.93 },
  { symbol: "HCLTECH", company: "HCL Technologies", ltp: 1474.50, dayChange: +12.20, dayChangePercent: +0.83 },
  { symbol: "TATAMOTORS", company: "Tata Motors", ltp: 675.80, dayChange: -5.60, dayChangePercent: -0.82 },
  { symbol: "HEROMOTOCO", company: "Hero MotoCorp", ltp: 3595.90, dayChange: +28.40, dayChangePercent: +0.79 },
  { symbol: "EICHERMOT", company: "Eicher Motors", ltp: 3895.20, dayChange: -22.30, dayChangePercent: -0.57 },
  { symbol: "TATASTEEL", company: "Tata Steel", ltp: 138.75, dayChange: +1.50, dayChangePercent: +1.09 },
  { symbol: "HDFCLIFE", company: "HDFC Life", ltp: 681.40, dayChange: -2.85, dayChangePercent: -0.42 },
  { symbol: "DIVISLAB", company: "Divi's Laboratories", ltp: 3590.25, dayChange: +42.70, dayChangePercent: +1.20 },
  { symbol: "BRITANNIA", company: "Britannia Industries", ltp: 5120.90, dayChange: -28.60, dayChangePercent: -0.56 },
  { symbol: "GRASIM", company: "Grasim Industries", ltp: 2051.60, dayChange: +18.10, dayChangePercent: +0.89 },

  { symbol: "TATAPOWER", company: "Tata Power", ltp: 310.45, dayChange: -2.80, dayChangePercent: -0.89 },
  { symbol: "COFORGE", company: "Coforge", ltp: 5185.25, dayChange: +65.30, dayChangePercent: +1.27 },
  { symbol: "PIDILITIND", company: "Pidilite Industries", ltp: 2640.15, dayChange: -19.40, dayChangePercent: -0.73 },
  { symbol: "DMART", company: "Avenue Supermarts", ltp: 4115.60, dayChange: +30.10, dayChangePercent: +0.74 },
  { symbol: "TORNTPHARM", company: "Torrent Pharma", ltp: 2920.55, dayChange: +18.90, dayChangePercent: +0.65 },
  { symbol: "SHREECEM", company: "Shree Cement", ltp: 26600.40, dayChange: -210.80, dayChangePercent: -0.79 },
  { symbol: "ABB", company: "ABB India", ltp: 5325.10, dayChange: +33.40, dayChangePercent: +0.63 },
  { symbol: "HAVELLS", company: "Havells India", ltp: 1578.70, dayChange: -8.20, dayChangePercent: -0.52 },
  { symbol: "DLF", company: "DLF Ltd", ltp: 594.20, dayChange: +4.80, dayChangePercent: +0.81 },
  { symbol: "BEL", company: "Bharat Electronics", ltp: 192.90, dayChange: +1.70, dayChangePercent: +0.89 }
];


// orders placed by user
export const ordersInitData = [
  // -------------------
  // OPEN ORDERS
  // -------------------
  {
    userId: "U12345",
    orderId: "ORD3001", 
    symbol: "TCS",
    side: "BUY",
    orderType: "LIMIT",
    qty: 10,
    price: 3670,
    status: "open",
    timestamp: "2025-01-25 10:15:32"
  },
  {
    userId: "U12345",
    orderId: "ORD3002",
    symbol: "INFY",
    side: "SELL",
    orderType: "LIMIT",
    qty: 5,
    price: 1530,
    status: "executed",
    timestamp: "2025-01-25 11:42:10"
  },

  // ✅ NEW OPEN ORDERS
  {
    userId: "U12345",
    orderId: "ORD3007",
    symbol: "AXISBANK",
    side: "BUY",
    orderType: "LIMIT",
    qty: 8,
    price: 1000,
    status: "open",
    timestamp: "2025-01-26 09:25:10"
  },
  {
    userId: "U12345",
    orderId: "ORD3008",
    symbol: "MARUTI",
    side: "SELL",
    orderType: "LIMIT",
    qty: 1,
    price: 12000,
    status: "open",
    timestamp: "2025-01-26 10:05:48"
  },
  {
    userId: "U12345",
    orderId: "ORD3009",
    symbol: "ASIANPAINT",
    side: "BUY",
    orderType: "LIMIT",
    qty: 3,
    price: 3000,
    status: "open",
    timestamp: "2025-01-26 11:12:33"
  },

  {
    userId: "U12345",
    orderId: "ORD3003",
    symbol: "SBIN",
    side: "BUY",
    orderType: "MARKET",
    qty: 12,
    price: 643.20,
    status: "executed",
    timestamp: "2025-01-25 12:30:55"
  },

  // -------------------
  // EXECUTED ORDERS
  // -------------------
  {
    userId: "U12345",
    orderId: "ORD2001",
    symbol: "RELIANCE",
    side: "BUY",
    orderType: "MARKET",
    qty: 4,
    price: 2610,
    status: "executed",
    timestamp: "2025-01-20 09:10:41"
  },
  {
    userId: "U12345",
    orderId: "ORD2002",
    symbol: "TITAN",
    side: "SELL",
    orderType: "MARKET",
    qty: 2,
    price: 3265,
    status: "executed",
    timestamp: "2025-01-20 10:55:12"
  },
  {
    userId: "U12345",
    orderId: "ORD2003",
    symbol: "HDFCBANK",
    side: "SELL",
    orderType: "LIMIT",
    qty: 3,
    price: 1645,
    status: "executed",
    timestamp: "2025-01-20 11:23:56"
  },
  {
    userId: "U12345",
    orderId: "ORD2004",
    symbol: "INFY",
    side: "BUY",
    orderType: "LIMIT",
    qty: 15,
    price: 1520,
    status: "executed",
    timestamp: "2025-01-20 12:15:32"
  },

  // ✅ NEW EXECUTED ORDERS
  {
    userId: "U12345",
    orderId: "ORD2010",
    symbol: "COALINDIA",
    side: "BUY",
    orderType: "MARKET",
    qty: 20,
    price: 390.75,
    status: "executed",
    timestamp: "2025-01-22 09:35:40"
  },
  {
    userId: "U12345",
    orderId: "ORD2011",
    symbol: "ICICIBANK",
    side: "BUY",
    orderType: "LIMIT",
    qty: 10,
    price: 970,
    status: "executed",
    timestamp: "2025-01-22 11:18:29"
  },
  {
    userId: "U12345",
    orderId: "ORD2012",
    symbol: "HCLTECH",
    side: "SELL",
    orderType: "MARKET",
    qty: 4,
    price: 1474.50,
    status: "executed",
    timestamp: "2025-01-23 10:02:15"
  },

  // -------------------
  // CANCELLED ORDERS
  // -------------------
  {
    userId: "U12345",
    orderId: "ORD2005",
    symbol: "SBIN",
    side: "SELL",
    orderType: "LIMIT",
    qty: 5,
    price: 648,
    status: "cancelled",
    timestamp: "2025-01-21 14:22:11"
  },
  {
    userId: "U12345",
    orderId: "ORD2006",
    symbol: "TCS",
    side: "BUY",
    orderType: "MARKET",
    qty: 6,
    price: null,
    status: "cancelled",
    timestamp: "2025-01-21 14:30:19"
  }
];

export const dummyTransactions = [
  {
    id: "TXN2001",
    date: "2025-02-01 09:45:12",
    type: "funds_added",
    amount: 15000,
    status: "successful",
    refNo: "DUMMY12987561",
    remarks: "Added funds via UPI"
  },
  {
    id: "TXN2002",
    date: "2025-02-02 11:10:35",
    type: "withdrawal",
    amount: 3000,
    status: "pending",
    refNo: "DUMMY98347512",
    remarks: "Withdrawal requested (paper mode)"
  },
  {
    id: "TXN2003",
    date: "2025-02-03 14:22:57",
    type: "buy",
    amount: 5240.50,
    status: "successful",
    refNo: "ORD3002",
    remarks: "Bought INFY (5 Qty @ ₹1048.10)"
  },
  {
    id: "TXN2004",
    date: "2025-02-04 16:40:18",
    type: "sell",
    amount: 3985.20,
    status: "successful",
    refNo: "ORD3003",
    remarks: "Sold TCS (1 Qty @ ₹3985.20)"
  },
  {
    id: "TXN2005",
    date: "2025-02-05 10:05:09",
    type: "charges_debited",
    amount: 20,
    status: "successful",
    refNo: "CHG674389",
    remarks: "Exchange transaction charge"
  },
  {
    id: "TXN2006",
    date: "2025-02-06 13:30:45",
    type: "funds_added",
    amount: 5000,
    status: "successful",
    refNo: "DUMMY45278391",
    remarks: "Added funds via bank transfer"
  },
  {
    id: "TXN2007",
    date: "2025-02-07 15:12:27",
    type: "withdrawal",
    amount: 10000,
    status: "failed",
    refNo: "DUMMY7812349",
    remarks: "Withdrawal failed due to invalid test account"
  },
  {
    id: "TXN2008",
    date: "2025-02-08 09:55:10",
    type: "buy",
    amount: 2600,
    status: "successful",
    refNo: "ORD3010",
    remarks: "Bought SBIN (4 Qty @ ₹650)"
  },
  {
    id: "TXN2009",
    date: "2025-02-09 14:32:41",
    type: "sell",
    amount: 4870.50,
    status: "successful",
    refNo: "ORD3011",
    remarks: "Sold RELIANCE (2 Qty @ ₹2435.25)"
  },
  {
    id: "TXN2010",
    date: "2025-02-10 17:28:59",
    type: "refund",
    amount: 2000,
    status: "successful",
    refNo: "RFND9821371",
    remarks: "Rollback test transaction"
  }
];


