import React, { useState, useEffect, useRef } from "react";
import { sendMessage } from "./api_temp";
import "./Chatbot.css";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = {
      sender: "user",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setIsTyping(true);

    const reply = await sendMessage(input);

    const botMsg = {
      sender: "bot",
      text: reply,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setIsTyping(false);

    setMessages((prev) => [...prev, botMsg]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="chat-container">

      <div className="chat-header">
        <h2>Chat with <span className="ai-color">TradeBot</span></h2>
        <p>Your AI trading assistant</p>
      </div>

      <div className="chat-box" ref={chatRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`msg-row ${msg.sender}`}>
            {msg.sender === "bot" && <div className="avatar bot-avatar">🤖</div>}

            <div className="msg-bubble">
              <div className="msg-text">{msg.text}</div>
              <div className="msg-time">{msg.time}</div>
            </div>

            {msg.sender === "user" && <div className="avatar user-avatar">🧑‍💻</div>}
          </div>
        ))}

        {isTyping && (
          <div className="msg-row bot">
            <div className="avatar bot-avatar">🤖</div>
            <div className="typing-bubble">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        )}
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button className="send-btn" onClick={handleSend}>Send</button>
      </div>

    </div>
  );
}