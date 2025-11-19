import React from "react";
import "./faq.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faq() {
  const faqs = [
    {
      q: "What is paper trading?",
      a: "Paper trading lets you practice buying and selling stocks using virtual money without any real financial risk.",
    },
    {
      q: "Does paper trading use real market data?",
      a: "Yes. You get live market-like charts, prices, and order flow for an accurate learning experience.",
    },
    {
      q: "Why did my paper trade order fail?",
      a: "It may fail due to unrealistic limit prices, insufficient virtual funds, or sudden price movements.",
    },
    {
      q: "Is paper trading beneficial for beginners?",
      a: "Definitely. It teaches strategy, confidence, and stock market mechanics before you trade with real money.",
    },
    {
      q: "Can I reset my paper trading account?",
      a: "Yes. You can reset your portfolio anytime and start fresh.",
    },
  ];

  return (
    <div className="faq-container">

      {/* ⭐ Stock Banner */}
      <div className="faq-banner">
        <h1>Frequently Asked Questions</h1>
        <p>Your complete guide to trading, investing & paper trading</p>
      </div>

      {/* ⭐ FAQ Section */}
      <div className="faq-content">
        {faqs.map((item, index) => (
          <Accordion key={index} className="faq-accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#ff6b3c" }} />}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                {item.q}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography sx={{ fontSize: "16px", color: "#555" }}>
                {item.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>

    </div>
  );
}
