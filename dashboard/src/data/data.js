export const watchlist = [
  { userId: "U12345", name: "INFY", price: 1555.45, percent: "-1.60%", isDown: true },
  { userId: "U12345", name: "ONGC", price: 116.8, percent: "-0.09%", isDown: true },
  { userId: "U12345", name: "TCS", price: 3194.8, percent: "-0.25%", isDown: true },
  { userId: "U12345", name: "KPITTECH", price: 266.45, percent: "3.54%", isDown: false },
  { userId: "U12345", name: "QUICKHEAL", price: 308.55, percent: "-0.15%", isDown: true },
  { userId: "U12345", name: "WIPRO", price: 577.75, percent: "0.32%", isDown: false },
  { userId: "U12345", name: "M&M", price: 779.8, percent: "-0.01%", isDown: true },
  { userId: "U12345", name: "RELIANCE", price: 2112.4, percent: "1.44%", isDown: false },
  { userId: "U12345", name: "HUL", price: 512.4, percent: "1.04%", isDown: false },
];

// holdings
export const holdings = [
  { userId: "U12345", name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%", isLoss: false },
  { userId: "U12345", name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%", isLoss: false },
  { userId: "U12345", name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%", isLoss: false },
  { userId: "U12345", name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: false },
  { userId: "U12345", name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%", isLoss: false },
  { userId: "U12345", name: "KPITTECH", qty: 5, avg: 250.3, price: 266.45, net: "+6.45%", day: "+3.54%", isLoss: false },
  { userId: "U12345", name: "M&M", qty: 2, avg: 809.9, price: 779.8, net: "-3.72%", day: "-0.01%", isLoss: true },
  { userId: "U12345", name: "RELIANCE", qty: 1, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%", isLoss: true },
  { userId: "U12345", name: "SBIN", qty: 4, avg: 324.35, price: 430.2, net: "+32.63%", day: "-0.34%", isLoss: false },
  { userId: "U12345", name: "SGBMAY29", qty: 2, avg: 4727.0, price: 4719.0, net: "-0.17%", day: "+0.15%", isLoss: true },
  { userId: "U12345", name: "TATAPOWER", qty: 5, avg: 104.2, price: 124.15, net: "+19.15%", day: "-0.24%", isLoss: false },
  { userId: "U12345", name: "TCS", qty: 1, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%", isLoss: false },
  { userId: "U12345", name: "WIPRO", qty: 4, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%", isLoss: false },
];

// positions
export const positions = [
  {
    userId: "U12345",
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: false,
  },
  {
    userId: "U12345",
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: false,
  },
];

export const transactionHistory = [
  {
    userId: "U12345",
    id: "TXN1001",
    date: "2025-01-12 10:23:45",
    type: "funds_added",
    amount: 5000,
    status: "successful",
    refNo: "DUMMY12987342",
    balanceAfter: 15000,
    remarks: "Dummy funds added"
  },
  {
    userId: "U12345",
    id: "TXN1002",
    date: "2025-01-15 14:55:12",
    type: "withdrawal",
    amount: 2000,
    status: "pending",
    refNo: "DUMMY5432378",
    balanceAfter: 13000,
    remarks: "Withdrawal initiated (paper mode)"
  },
  {
    userId: "U12345",
    id: "TXN1003",
    date: "2025-01-17 09:11:32",
    type: "funds_added",
    amount: 10000,
    status: "successful",
    refNo: "DUMMY40981273",
    balanceAfter: 23000,
    remarks: "Funds added for paper trading"
  },
  {
    userId: "U12345",
    id: "TXN1004",
    date: "2025-01-19 18:02:10",
    type: "withdrawal",
    amount: 5000,
    status: "failed",
    refNo: "DUMMY9081231",
    balanceAfter: 23000,
    remarks: "Withdrawal failed (test case)"
  },
  {
    userId: "U12345",
    id: "TXN1005",
    date: "2025-01-20 11:45:27",
    type: "funds_added",
    amount: 3000,
    status: "successful",
    refNo: "DUMMY88372155",
    balanceAfter: 26000,
    remarks: "Bonus test funds added"
  },
  {
    userId: "U12345",
    id: "TXN1006",
    date: "2025-01-22 16:14:09",
    type: "withdrawal",
    amount: 4000,
    status: "successful",
    refNo: "DUMMY77321691",
    balanceAfter: 22000,
    remarks: "Withdrawal processed"
  },
  {
    userId: "U12345",
    id: "TXN1007",
    date: "2025-01-23 09:50:03",
    type: "withdrawal",
    amount: 3000,
    status: "pending",
    refNo: "DUMMY55219837",
    balanceAfter: 19000,
    remarks: "Pending withdrawal request"
  },
  {
    userId: "U12345",
    id: "TXN1008",
    date: "2025-01-25 12:28:45",
    type: "funds_added",
    amount: 7000,
    status: "successful",
    refNo: "DUMMY33119284",
    balanceAfter: 26000,
    remarks: "Funds added by user (dummy)"
  },
  {
    userId: "U12345",
    id: "TXN1009",
    date: "2025-01-27 18:22:06",
    type: "withdrawal",
    amount: 2500,
    status: "failed",
    refNo: "DUMMY99871231",
    balanceAfter: 26000,
    remarks: "Failed withdrawal (insufficient test funds)"
  },
  {
    userId: "U12345",
    id: "TXN1010",
    date: "2025-01-28 08:44:12",
    type: "funds_added",
    amount: 2000,
    status: "successful",
    refNo: "DUMMY88991231",
    balanceAfter: 28000,
    remarks: "Daily test add"
  }
];

export const tradebook = [
  {
    tradeId: "T20240101-001",
    userId: "U12345",
    orderId: "O20240101-001",
    symbol: "TCS",
    side: "BUY",
    quantity: 10,
    price: 3675.50,
    tradeValue: 36755,
    tradeType: "MARKET",
    executedAt: "2024-01-01T10:15:32Z",
    status: "EXECUTED"
  },
  {
    tradeId: "T20240101-002",
    userId: "U12345",
    orderId: "O20240101-004",
    symbol: "INFY",
    side: "BUY",
    quantity: 15,
    price: 1520.20,
    tradeValue: 22803,
    tradeType: "LIMIT",
    executedAt: "2024-01-01T10:32:14Z",
    status: "EXECUTED"
  },
  {
    tradeId: "T20240101-003",
    userId: "U12345",
    orderId: "O20240101-010",
    symbol: "RELIANCE",
    side: "SELL",
    quantity: 5,
    price: 2612.80,
    tradeValue: 13064,
    tradeType: "MARKET",
    executedAt: "2024-01-01T11:05:52Z",
    status: "EXECUTED",
    realizedPnl: 540.4
  },
  {
    tradeId: "T20240101-004",
    userId: "U12345",
    orderId: "O20240101-011",
    symbol: "TCS",
    side: "SELL",
    quantity: 5,
    price: 3701.00,
    tradeValue: 18505,
    tradeType: "LIMIT",
    executedAt: "2024-01-01T11:25:41Z",
    status: "EXECUTED",
    realizedPnl: 127.5
  },
  {
    tradeId: "T20240101-005",
    userId: "U12345",
    orderId: "O20240101-014",
    symbol: "HDFCBANK",
    side: "BUY",
    quantity: 20,
    price: 1643.90,
    tradeValue: 32878,
    tradeType: "MARKET",
    executedAt: "2024-01-01T12:03:15Z",
    status: "EXECUTED"
  },
  {
    tradeId: "T20240101-006",
    userId: "U12345",
    orderId: "O20240101-017",
    symbol: "HDFCBANK",
    side: "SELL",
    quantity: 10,
    price: 1648.10,
    tradeValue: 16481,
    tradeType: "MARKET",
    executedAt: "2024-01-01T12:45:29Z",
    status: "EXECUTED",
    realizedPnl: 42
  },
  {
    tradeId: "T20240101-007",
    userId: "U12345",
    orderId: "O20240101-021",
    symbol: "SBIN",
    side: "BUY",
    quantity: 25,
    price: 647.35,
    tradeValue: 16183.75,
    tradeType: "LIMIT",
    executedAt: "2024-01-01T13:22:10Z",
    status: "EXECUTED"
  },
  {
    tradeId: "T20240101-008",
    userId: "U12345",
    orderId: "O20240101-025",
    symbol: "SBIN",
    side: "SELL",
    quantity: 10,
    price: 651.00,
    tradeValue: 6510,
    tradeType: "MARKET",
    executedAt: "2024-01-01T13:58:08Z",
    status: "EXECUTED",
    realizedPnl: 36.5
  },
  {
    tradeId: "T20240101-009",
    userId: "U12345",
    orderId: "O20240101-026",
    symbol: "TITAN",
    side: "BUY",
    quantity: 4,
    price: 3251.75,
    tradeValue: 13007,
    tradeType: "LIMIT",
    executedAt: "2024-01-01T14:12:44Z",
    status: "EXECUTED"
  },
  {
    tradeId: "T20240101-010",
    userId: "U12345",
    orderId: "O20240101-031",
    symbol: "TITAN",
    side: "SELL",
    quantity: 2,
    price: 3265.50,
    tradeValue: 6531,
    tradeType: "MARKET",
    executedAt: "2024-01-01T14:40:21Z",
    status: "EXECUTED",
    realizedPnl: 27.5
  }
];

export const unrealisedPNl = // UNREALISED PNL (Active Positions)
[
  { userId: "U12345", symbol: "TCS", qty: 10, avgBuyPrice: 3675.50, ltp: 3700.00, unrealisedPnl: 245.00 },
  { userId: "U12345", symbol: "INFY", qty: 15, avgBuyPrice: 1520.00, ltp: 1500.00, unrealisedPnl: -300.00 },
  { userId: "U12345", symbol: "SBIN", qty: 12, avgBuyPrice: 650.00, ltp: 655.50, unrealisedPnl: 66.00 },
  { userId: "U12345", symbol: "HDFCBANK", qty: 5, avgBuyPrice: 1640.00, ltp: 1625.00, unrealisedPnl: -75.00 },
  { userId: "U12345", symbol: "TITAN", qty: 3, avgBuyPrice: 3250.00, ltp: 3240.00, unrealisedPnl: -30.00 },
  { userId: "U12345", symbol: "INFY", qty: 15, avgBuyPrice: 1520.20, ltp: 1510.00, unrealisedPnl: -153.00 },
  { userId: "U12345", symbol: "SBIN", qty: 15, avgBuyPrice: 647.35, ltp: 650.00, unrealisedPnl: 39.75 }
];

export const realisedPNl = // REALISED PNL (Closed Trades)
[
  { userId: "U12345", symbol: "TCS", qty: 5, avgBuyPrice: 3675.50, sellPrice: 3701.00, realisedPnl: 127.50 },
  { userId: "U12345", symbol: "HDFCBANK", qty: 10, avgBuyPrice: 1643.90, sellPrice: 1648.10, realisedPnl: 42.00 },
  { userId: "U12345", symbol: "TCS", qty: 5, avgBuyPrice: 3675.50, sellPrice: 3650.00, realisedPnl: -127.50 },
  { userId: "U12345", symbol: "INFY", qty: 10, avgBuyPrice: 1520.00, sellPrice: 1505.00, realisedPnl: -150.00 },
  { userId: "U12345", symbol: "RELIANCE", qty: 4, avgBuyPrice: 2600.00, sellPrice: 2625.00, realisedPnl: 100.00 },
  { userId: "U12345", symbol: "SBIN", qty: 8, avgBuyPrice: 650.00, sellPrice: 645.50, realisedPnl: -36.00 },
  { userId: "U12345", symbol: "TITAN", qty: 3, avgBuyPrice: 3250.00, sellPrice: 3270.00, realisedPnl: 60.00 },
  { userId: "U12345", symbol: "SBIN", qty: 10, avgBuyPrice: 647.35, sellPrice: 651.00, realisedPnl: 36.50 },
  { userId: "U12345", symbol: "TITAN", qty: 2, avgBuyPrice: 3251.75, sellPrice: 3265.50, realisedPnl: 27.50 }
];

export const orders = [
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
    status: "open",
    timestamp: "2025-01-25 11:42:10"
  },
  {
    userId: "U12345",
    orderId: "ORD3003",
    symbol: "SBIN",
    side: "BUY",
    orderType: "MARKET",
    qty: 12,
    price: null,
    status: "open",
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
    price: null,
    executedPrice: 2610,
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
    price: null,
    executedPrice: 3265,
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
    price: 1640,
    executedPrice: 1645,
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
    executedPrice: 1520,
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
    price: 648,
    executedPrice: null,
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
    executedPrice: null,
    status: "cancelled",
    timestamp: "2025-01-21 14:30:19"
  }
];
