import React, { useState } from "react";
import "./faq.css";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";

import { useTheme } from "../../context/ThemeContext";
import SearchIcon from "@mui/icons-material/Search";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HelpIcon from "@mui/icons-material/Help";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQs() {
  const [tab, setTab] = useState(0);
  const [search, setSearch] = useState("");
  const { theme } = useTheme();

  const faqData = [
    {
      category: "Trading Basics",
      icon: <TrendingUpIcon sx={{ color: "#c6d219ff" }} />,
      questions: [
        {
          q: "What is paper trading?",
          a: "Paper trading allows you to practice trading using virtual money with real market data.",
        },
        {
          q: "Does paper trading use real-time market prices?",
          a: "Yes, most platforms mirror live market data to simulate real trading conditions.",
        },
        {
          q: "Can I lose real money in paper trading?",
          a: "No. Paper trading is completely risk-free and uses virtual funds only.",
        },
        {
          q: "Is paper trading helpful for beginners?",
          a: "Yes. It helps beginners understand trading without financial risk.",
        },
        {
          q: "Can I reset my paper trading account?",
          a: "Most platforms allow you to reset the virtual funds anytime.",
        },
        {
          q: "How do I start paper trading?",
          a: "Simply create an account on any paper trading platform and begin placing orders.",
        },
      ],
    },

    {
      category: "Orders & Execution",
      icon: <WarningAmberIcon sx={{ color: "#d32f2f" }} />,
      questions: [
        {
          q: "Why did my paper trade order fail?",
          a: "It may fail due to incorrect quantity, limit price not executed, or closed market hours.",
        },
        {
          q: "What is a limit order?",
          a: "A limit order is an instruction to buy/sell at a specific price or better.",
        },
        {
          q: "What is a market order?",
          a: "A market order executes immediately at the current market price.",
        },
        {
          q: "Why is my order stuck in pending?",
          a: "It may be waiting for the market price to match your limit order.",
        },
        {
          q: "What happens if the market closes before my order executes?",
          a: "It will remain pending or be cancelled depending on the platform's rules.",
        },
        {
          q: "Can I cancel an open order?",
          a: "Yes, open orders can usually be cancelled unless already executed.",
        },
      ],
    },

    {
      category: "Account & Settings",
      icon: <AccountCircleIcon sx={{ color: "#0288d1" }} />,
      questions: [
        {
          q: "Do I need a demat account for paper trading?",
          a: "No. Paper trading does not require a demat or trading account.",
        },
        {
          q: "Can I use the same login for paper and real trading?",
          a: "This depends on the platform. Some offer separate logins.",
        },
        {
          q: "Can I change my virtual balance?",
          a: "Some platforms allow adding or resetting virtual money.",
        },
        {
          q: "Can multiple users use one account?",
          a: "It is recommended each user keeps their own account for tracking progress.",
        },
        {
          q: "How do I update my profile details?",
          a: "Most platforms allow editing profile information in settings.",
        },
        {
          q: "Is my data saved automatically?",
          a: "Yes. Your trades and virtual P&L are usually saved in the platform database.",
        },
      ],
    },

    {
      category: "FAQs & Help",
      icon: <HelpIcon sx={{ color: "#7b1fa2" }} />,
      questions: [
        {
          q: "Where can I learn stock market basics?",
          a: "You can explore the Learn section, blogs, or free YouTube courses.",
        },
        {
          q: "Does paper trading reflect real market volatility?",
          a: "Yes, it uses real market data but execution speed may differ.",
        },
        {
          q: "Can I export my trades?",
          a: "Some platforms offer CSV or Excel export of your trade history.",
        },
        {
          q: "Is paper trading enough to start real trading?",
          a: "It builds confidence but real trading requires risk awareness.",
        },
        {
          q: "Why is my profit/loss different from expected?",
          a: "Because of calculation differences and timing between buy/sell executions.",
        },
        {
          q: "How often do paper trading prices update?",
          a: "Most platforms update data in real-time or with minimal delay.",
        },
      ],
    },
  ];

  const filteredQuestions = faqData.map((cat) => ({
    ...cat,
    questions: cat.questions.filter((item) =>
      item.q.toLowerCase().includes(search.toLowerCase())
    ),
  }));

  return (

    <Box className={`faq-page ${theme === "dark" ? "dark" : ""}`}>

      {/* HEADER */}
      <Typography className="faq-title"><b>Frequently Asked Questions</b></Typography>

      {/* SEARCH BAR */}
      <Box className="faq-search-box">
        <TextField
          fullWidth
          placeholder="Search your question..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* CATEGORY TABS */}
      <Tabs
        value={tab}
        onChange={(e, newValue) => setTab(newValue)}
        centered
        className="faq-tabs"
      >
        {faqData.map((cat, index) => (
          <Tab key={index} label={cat.category} icon={cat.icon} iconPosition="start" />
        ))}
      </Tabs>

      {/* ACCORDIONS */}
      <Box sx={{ mt: 4 }}>
        {filteredQuestions[tab].questions.map((q, i) => (
          <Accordion key={i} className="faq-accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className="faq-question">{q.q}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography className="faq-answer">{q.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
