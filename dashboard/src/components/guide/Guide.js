// function Guide() {
//     return ( <h1>Guide</h1> );
// }

// export default Guide;

import React from "react";
import { Box, Typography, Card, CardContent, Divider } from "@mui/material";

function Guide() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
        User Guide
      </Typography>

      <Typography variant="body1" sx={{ mb: 4, color: "gray" }}>
        This guide will help you understand how to navigate and use our
        Paper Trading Platform. Each section explains where to find important
        features and what actions you can perform.
      </Typography>

      {/* SECTION 1 */}



      <Card sx={{ mb: 3, p: 2 }}>
  <CardContent>

    <Typography variant="h5" sx={{ fontWeight: 600 }}>
      1. Navigation Menu (Side Drawer)
    </Typography>

    <Divider sx={{ my: 1 }} />

    <Typography variant="body1" sx={{ mb: 2 }}>
      On the top-right corner of the dashboard, you will find a <b>three-line icon </b>. When you click it, a
      side panel opens from the right. This panel contains quick links
      to all major sections of the platform so that you can easily
      navigate between different features.
    </Typography>

    <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
      The menu contains the following options:
    </Typography>

    <ul style={{ marginLeft: "20px", lineHeight: "1.8" }}>
      <li>
        <b>Dashboard</b> – Takes you to the main summary page showing your
        portfolio value, P&L, and market overview.
      </li>

      <li>
        <b>Positions</b> – Shows your active intraday positions, including
        current price, MTM (Mark-to-Market), and quantity.
      </li>

      <li>
        <b>Funds</b> – Displays your available margin, used margin,
        opening balance, and overall fund details.
      </li>

      <li>
        <b>Holdings</b> – Shows all stocks you are currently holding along
        with P&L, invested amount, and current value.
      </li>

      <li>
        <b>Orders</b> – Contains records of all orders you have placed
        (Executed, Pending, Completed, or Cancelled).
      </li>

      <li>
        <b>Reports</b> – Allows you to download your trade reports and
        performance data for analysis.
      </li>

      <li>
        <b>Guide</b> – Opens this help section to understand how the
        platform works.
      </li>
    </ul>

    <Typography variant="body2" sx={{ color: "gray", mt: 2 }}>
      Clicking on any of these options will instantly take you to that
      section without leaving your current session.
    </Typography>

    {/* Optional: Add screenshot of menu */}
    <img
      src={`${process.env.PUBLIC_URL}/menu-preview.png`}
      alt="Menu Screenshot"
      style={{
        width: "100%",
        marginTop: "15px",
        borderRadius: "12px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.15)"
      }}
    />

  </CardContent>
</Card>


{/* SECTION 2 */}

<Card sx={{ mb: 3, p: 2 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            2. Dashboard Overview
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body1">
            The dashboard gives you a quick summary of your total portfolio
            value, daily change, and performance. You can monitor your holdings,
            recent orders, and market overview from here.
          </Typography>
        </CardContent>

<img
  src="/dashboard-preview.png"
  alt="Dashboard preview"
  style={{
    width: "100%",

    borderRadius: "12px",
    marginTop: "20px",
    marginBottom: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  }}
/>

      </Card>

      {/* SECTION 3 */}
<Card sx={{ mb: 3, p: 2 }}>
  <CardContent>

    <Typography variant="h5" sx={{ fontWeight: 600 }}>
      3. Positions Overview
    </Typography>

    <Divider sx={{ my: 1 }} />

    <Typography variant="body1" sx={{ mb: 2 }}>
      The <b>Positions</b> page shows all your active trades.
      These are the stocks that you have bought or sold and are still open
      (not squared off yet). It helps you track your real-time profit or loss.
    </Typography>

    <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
      Each row represents one active position and contains:
    </Typography>

    <ul style={{ marginLeft: "20px", lineHeight: "1.8" }}>
      <li>
        <b>Prod.</b> – Product type (CNC, MIS, etc.), meaning delivery or intraday.
      </li>
      <li>
        <b>Inst.</b> – The stock name or instrument (e.g., EVEREADY, JUBLFOOD).
      </li>
      <li>
        <b>Qty.</b> – Number of shares you currently hold in this position.
      </li>
      <li>
        <b>Avg.</b> – The average price at which you bought the shares.
      </li>
      <li>
        <b>LTP</b> – Latest Traded Price (current live market price).
      </li>
      <li>
        <b>P&L</b> – Your real-time profit or loss for this position.
      </li>
      <li>
        <b>Chg.</b> – Percentage change in the stock’s price.
      </li>
    </ul>

    <Typography variant="body2" sx={{ color: "gray", mt: 2 }}>
      This section helps you monitor how your open trades are performing
      and decide whether to hold, exit, or add more quantity.
    </Typography>

    {/* Optional: Add screenshot */}
    <img
      src={`${process.env.PUBLIC_URL}/positions-preview.png`}
      alt="Positions Screenshot"
      style={{
        width: "100%",
               marginTop: "15px",
        borderRadius: "12px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.15)"
      }}
    />

  </CardContent>
</Card>


      {/* SECTION 3 */}
     {/* SECTION 4 */}
<Card sx={{ mb: 3, p: 2 }}>
  <CardContent>

    <Typography variant="h5" sx={{ fontWeight: 600 }}>
      4. Funds Section
    </Typography>

    <Divider sx={{ my: 1 }} />

    <Typography variant="body1" sx={{ mb: 2 }}>
      The <strong>Funds</strong> page shows your available balance and helps you
      manage the money used for trading. It provides a clear view of how much cash
      you currently have and the collateral available.
    </Typography>

    <ul style={{ marginLeft: "20px", lineHeight: "1.8" }}>
      <li>
        <b>Available Cash</b> – The amount you can immediately use for buying stocks.
      </li>
      <li>
        <b>Collateral (Liquid)</b> – Extra margin given through pledged holdings
        (for paper trading this is usually ₹0).
      </li>
      <li>
        <b>Add Funds</b> – Lets you increase your trading balance.
      </li>
      <li>
        <b>Withdraw Funds</b> – Lets you reduce your trading balance.
      </li>
    </ul>



    {/* Optional screenshot */}
    <img
      src={`${process.env.PUBLIC_URL}/funds-preview.png`}
      alt="Funds Section Preview"
      style={{
        width: "100%",

        marginTop: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    />

    <Typography variant="body1" sx={{ mt: 2 }}>
      Below this, the <strong>Recent Transactions</strong> table shows:
    </Typography>

    <ul style={{ marginLeft: "20px", lineHeight: "1.8" }}>
      <li>Date & time of transaction</li>
      <li>Type – funds added or withdrawal</li>
      <li>Amount</li>
      <li>Status – successful, pending, or failed</li>
      <li>Reference ID (Dummy numbers)</li>
      <li>Remarks explaining each entry</li>
    </ul>

    <Typography variant="body1" sx={{ mt: 2 }}>
      The <strong>“View Transaction History”</strong> button opens a detailed modal,
      where you can see <strong>all transactions in a scrollable popup</strong>, including
      older entries that are not shown in the main table.
    </Typography>

<img
      src={`${process.env.PUBLIC_URL}/funds-preview2.png`}
      alt="Funds Section Preview"
      style={{
        width: "100%",

        marginTop: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    />


  </CardContent>
</Card>


      {/* SECTION 4 */}
      {/* SECTION 4 */}
<Card sx={{ mb: 3, p: 2 }}>
  <CardContent>
    <Typography variant="h5" sx={{ fontWeight: 600 }}>
      4. Holdings Section
    </Typography>
    <Divider sx={{ my: 1 }} />
    <Typography variant="body1">
      The <strong>Holdings</strong> page gives you a complete breakdown of all stocks you
      currently own. It includes:
      <br />• A <strong>pie chart</strong> showing the weightage of each stock in your portfolio
      <br />• A <strong>detailed table</strong> with Quantity, LTP, Average Price, Current Value &amp; P&amp;L
      <br />• <strong>Net change</strong> and <strong>day change</strong> for every stock
      <br />• Total <strong>Investment</strong>, <strong>Current Value</strong>, and <strong>Overall P&amp;L</strong> at the bottom
      <br /><br />
      This section helps you understand which stocks are performing well, how your
      portfolio is distributed, and your overall gains or losses.
    </Typography>

    <img
      src="/holdings-preview.png"
      alt="Holdings section preview"
      style={{
        width: "100%",

        borderRadius: "12px",
        marginTop: "20px",
        marginBottom: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    />
  </CardContent>
</Card>


{/* SECTION 5 */}
<Card sx={{ mb: 3, p: 2 }}>
  <CardContent>
    <Typography variant="h5" sx={{ fontWeight: 600 }}>
      5. Orders Section
    </Typography>
    <Divider sx={{ my: 1 }} />

    <Typography variant="body1">
      The <strong>Orders</strong> page displays all the trades you have placed on the
      platform. It is divided into two main tables:
      <br /><br />

      <strong>• Open Orders</strong><br />
      Shows all active orders that are not yet executed.
      You can view:
      <br />– Order ID
      <br />– Symbol
      <br />– Buy / Sell (Side)
      <br />– Order Type (Limit / Market)
      <br />– Quantity
      <br />– Price
      <br />– Time of order placement
      <br /><br />

      <strong>• Total Orders</strong><br />
      This table lists every order you have placed, including completed,
      cancelled, and executed trades.
      It helps you track trading history and review past transactions.
      <br /><br />

      This section is useful for monitoring your active trades and verifying the
      execution details of previous orders.
    </Typography>

    <img
      src="/orders-preview.png"
      alt="Orders section preview"
      style={{
        width: "100%",
               borderRadius: "12px",
        marginTop: "20px",
        marginBottom: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    />

    <img
      src="/orders-preview2.png"
      alt="Orders section preview"
      style={{
        width: "100%",
               borderRadius: "12px",
        marginTop: "20px",
        marginBottom: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    />
  </CardContent>
</Card>


{/* SECTION 6 */}
<Card sx={{ mb: 3, p: 2 }}>
  <CardContent>
    <Typography variant="h5" sx={{ fontWeight: 600 }}>
      6. Reports Section
    </Typography>
    <Divider sx={{ my: 1 }} />

    <Typography variant="body1">
      The <strong>Reports</strong> page gives you a detailed summary of all your
      executed trades and performance metrics. It includes two major parts:
      <br /><br />

      <strong>• Tradebook</strong><br />
      This table shows every completed trade with full details:
      <br />– <strong>Trade ID</strong> & Order ID
      <br />– <strong>Symbol</strong> (TCS, INFY, SBIN, etc.)
      <br />– <strong>Buy / Sell</strong> side
      <br />– <strong>Quantity</strong> traded
      <br />– <strong>Price</strong> and <strong>Trade Value</strong>
      <br />– <strong>Trade Type</strong> (Market / Limit)
      <br />– <strong>Executed At</strong> timestamp
      <br />– <strong>Status</strong> (Executed)
      <br /><br />
      This section helps you track all successful trades and maintain a proper
      trading log.

      <br /><br />

      <strong>• PnL Chart</strong><br />
      Below the tradebook, a <strong>Stock vs Price</strong> line graph displays how
      the prices of your portfolio stocks have moved.
      It provides a quick visual summary of market performance and helps you analyze
      which stocks contributed most to your gains/losses.
      <br /><br />

      Together, these tools allow you to easily review your historical trading
      activity and evaluate your overall performance.
    </Typography>

    <img
      src="/reports-preview.png"
      alt="Reports section preview"
      style={{
        width: "100%",

        borderRadius: "12px",
        marginTop: "20px",
        marginBottom: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    />
  </CardContent>
</Card>




      {/* SECTION 5 */}
      {/* <Card sx={{ mb: 3, p: 2 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            5. Reports (Your Contribution!)
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body1">
            In the <strong>Reports</strong> section, you can export your trading
            data as:
            <br />• CSV file
            <br />• Excel sheet
            <br />
            This feature helps users download and review their entire trade
            history. (This is your new contribution!)
          </Typography>
        </CardContent>
      </Card> */}

      {/* SECTION 6 */}
      {/* <Card sx={{ mb: 3, p: 2 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            6. Learn Trading (Your Contribution!)
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body1">
            The <strong>Guide</strong> section provides educational material on:
            <br />• How the dashboard works
            <br />• How to place trades
            <br />• How to read reports
            <br />• Stock market basics
            <br />
            This helps new users understand the platform easily.
          </Typography>
        </CardContent>
      </Card> */}

      {/* SECTION 7 */}
      {/* <Card sx={{ mb: 3, p: 2 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            7. Sentiment Analysis (Your Contribution!)
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body1">
            We analyze the sentiment of market news / text you enter to show:
            <br />• Positive sentiment
            <br />• Negative sentiment
            <br />• Neutral sentiment
            <br />
            This helps users understand market mood before trading.
          </Typography>
        </CardContent>
      </Card> */}

      <Typography variant="body2" sx={{ mt: 4, textAlign: "center", color: "gray" }}>
        © 2025 Tradeon – All Rights Reserved
      </Typography>
    </Box>
  );
}

export default Guide;
