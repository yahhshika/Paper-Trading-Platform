import {Link} from "react-router-dom"
function RightSection() {
    return ( <>
    <div class="card mb-3 border-0">
        <div class="card-body">
            <h5 class="card-title">Tradeon</h5>
            <p class="card-text">Experience Tradeon — a high-performance trading platform offering live market feeds, advanced charting, instant order execution, and a clutter-free design. Powered for traders who demand speed, accuracy, and seamless cross-device accessibility.</p>
            {/* <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
           <a
  href="http://localhost:3001"
  target="_blank"
  rel="noopener noreferrer"
  className="card-link text-decoration-none"
  style={{ color: "#387ed1" }}
>
  Try it <i className="fa-solid fa-arrow-right"></i>
</a>

        </div>

        <br />
<br />
<br />
<br/>

         <div class="card-body">
            <h5 class="card-title">TradeBot</h5>
            <p class="card-text">Experience Tradebot — an AI-powered trading assistant that understands both English and Hinglish. Get instant market insights, clear explanations, and smart guidance to make better trading decisions with speed, accuracy, and complete ease.</p>
            {/* <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
           <a
  href="http://localhost:3002"
  target="_blank"
  rel="noopener noreferrer"
  className="card-link text-decoration-none"
  style={{ color: "#387ed1" }}
>
  Try it <i className="fa-solid fa-arrow-right"></i>
</a>
        </div>
    </div>
    </> );
}

export default RightSection;