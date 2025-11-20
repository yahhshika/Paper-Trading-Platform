export const initialUserState = {
  userId: "U12345",
  name: "John Doe",
  username: "@johndoe",
  email: "johndoe@gmail.com",

  funds: {
    availableCash: 7489.44,
    collateral: 1234.5,
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

export const dummyMarketData = [
  // ----------------- HOLDINGS -----------------
  {
    symbol: "TCS",
    company: "Tata Consultancy Services",
    ltp: 3985.20,
    avgPrice: 3820.00,
    quantity: 4,
    categories: ["holding"],
    dayChange: +45.20,
    dayChangePercent: +1.15,
    pnl: (3985.20 - 3820.00) * 4, // +660.8
  },

  {
    symbol: "RELIANCE",
    company: "Reliance Industries Ltd",
    ltp: 2528.10,
    avgPrice: 2400.00,
    quantity: 3,
    categories: ["holding"],
    dayChange: -12.30,
    dayChangePercent: -0.48,
    pnl: (2528.10 - 2400.00) * 3, // +384.3
  },

  {
    symbol: "HDFCBANK",
    company: "HDFC Bank Ltd",
    ltp: 1520.45,
    avgPrice: 1588.00,
    quantity: 5,
    categories: ["holding"],
    dayChange: +8.75,
    dayChangePercent: +0.58,
    pnl: (1520.45 - 1588.00) * 5, // -338 approx
  },

  // ----------------- POSITIONS (Intraday/overnight trades) -----------------
  {
    symbol: "INFY",
    company: "Infosys Ltd",
    ltp: 1480.60,
    avgPrice: 1505.00,
    quantity: 20,
    categories: ["position"],
    dayChange: -6.50,
    dayChangePercent: -0.44,
    pnl: (1480.60 - 1505.00) * 20, // -488
  },

  {
    symbol: "ICICIBANK",
    company: "ICICI Bank Ltd",
    ltp: 1022.35,
    avgPrice: 1010.00,
    quantity: 10,
    categories: ["position"],
    dayChange: +9.10,
    dayChangePercent: +0.90,
    pnl: (1022.35 - 1010.00) * 10, // +123.5
  },

  // ----------------- WATCHLIST ONLY -----------------
  {
    symbol: "SBIN",
    company: "State Bank of India",
    ltp: 675.80,
    quantity: 0,
    avgPrice: null,
    categories: ["watchlist"],
    dayChange: +2.10,
    dayChangePercent: +0.31,
    pnl: null,
  },

  {
    symbol: "HCLTECH",
    company: "HCL Technologies Ltd",
    ltp: 1445.60,
    quantity: 0,
    avgPrice: null,
    categories: ["watchlist"],
    dayChange: -5.25,
    dayChangePercent: -0.36,
    pnl: null,
  },

  {
    symbol: "ASIANPAINT",
    company: "Asian Paints Ltd",
    ltp: 3120.10,
    quantity: 0,
    avgPrice: null,
    categories: ["watchlist"],
    dayChange: +18.35,
    dayChangePercent: +0.59,
    pnl: null,
  },

  // ----------------- MIXED: Appears in BOTH holding + watchlist -----------------
  {
    symbol: "MARUTI",
    company: "Maruti Suzuki India Ltd",
    ltp: 10785.40,
    avgPrice: 10500.00,
    quantity: 1,
    categories: ["holding", "watchlist"],
    dayChange: +52.40,
    dayChangePercent: +0.48,
    pnl: (10785.40 - 10500) * 1, // +285.4
  },

  // ----------------- MIXED: position + watchlist -----------------
  {
    symbol: "AXISBANK",
    company: "Axis Bank Ltd",
    ltp: 1123.90,
    avgPrice: 1135.50,
    quantity: 8,
    categories: ["position", "watchlist"],
    dayChange: +4.20,
    dayChangePercent: +0.37,
    pnl: (1123.90 - 1135.50) * 8, // -92.8
  },
];


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
    price: 3670,                   // Limit price
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
    price: 1530,                   // Limit price
    status: "open",
    timestamp: "2025-01-25 11:42:10"
  },

  // ✔ MARKET ORDER OPEN (only in low liquidity / simulation)
  {
    userId: "U12345",
    orderId: "ORD3003",
    symbol: "SBIN",
    side: "BUY",
    orderType: "MARKET",
    qty: 12,
    price: null,                   // No execution yet
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
    price: 2610,                   // executed at this price
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
    price: 3265,                   // executed
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
    price: 1645,                   // executed at 1645
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
    price: 1520,                   // executed at limit price
    status: "executed",
    timestamp: "2025-01-20 12:15:32"
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
    price: 648,                    // original limit price
    status: "cancelled",
    timestamp: "2025-01-21 14:22:11"
  },

  // ✔ MARKET ORDER can be cancelled too in simulation
  {
    userId: "U12345",
    orderId: "ORD2006",
    symbol: "TCS",
    side: "BUY",
    orderType: "MARKET",
    qty: 6,
    price: null,                   // no fill
    status: "cancelled",
    timestamp: "2025-01-21 14:30:19"
  }
];
