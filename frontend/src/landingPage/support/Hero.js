// function Hero() {
//     return ( <h1>Hero</h1> );
// }

// export default Hero;

import React from "react";

function Hero() {
  return (
    <div
      style={{
        width: "100%",

        backgroundImage: `
  linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
  url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 20px",
        textAlign: "center",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "42px", fontWeight: "700", marginBottom: "10px" }}>
        CONTACT US
      </h1>

      <p style={{ fontSize: "18px", maxWidth: "700px", margin: "auto" }}>
        Need help? You are welcome to contact us anytime. Our team will get in
        touch with you shortly.
      </p>
    </div>
  );
}

export default Hero;
