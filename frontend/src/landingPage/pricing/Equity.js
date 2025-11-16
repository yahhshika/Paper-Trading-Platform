
function Equity() {
     return (
    <div className="container my-5">

      {/* Equity Delivery */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h4 className="card-title">Equity Delivery</h4>
          <ul>
            <li><strong>Brokerage:</strong> Zero brokerage</li>
            <li><strong>STT/CTT:</strong> 0.1% on buy & sell</li>
            <li><strong>Transaction Charges:</strong> NSE: 0.00297%, BSE: 0.00375%</li>
            <li><strong>GST:</strong> 18% on (brokerage + SEBI charges + transaction charges)</li>
            <li><strong>SEBI Charges:</strong> ₹10 per crore</li>
            <li><strong>Stamp Charges:</strong> 0.015% or ₹1500 per crore (buy side)</li>
          </ul>
        </div>
      </div>

      {/* Equity Intraday */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h4 className="card-title">Equity Intraday</h4>
          <ul>
            <li><strong>Brokerage:</strong> 0.03% or ₹20 per executed order (whichever is lower)</li>
            <li><strong>STT/CTT:</strong> 0.025% on sell side</li>
            <li><strong>Transaction Charges:</strong> NSE: 0.00297%, BSE: 0.00375%</li>
            <li><strong>GST:</strong> 18% on (brokerage + SEBI charges + transaction charges)</li>
            <li><strong>SEBI Charges:</strong> ₹10 per crore</li>
            <li><strong>Stamp Charges:</strong> 0.003% or ₹300 per crore (buy side)</li>
          </ul>
        </div>
      </div>

      {/* F&O Futures */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h4 className="card-title">F&O – Futures</h4>
          <ul>
            <li><strong>Brokerage:</strong> 0.03% or ₹20 per executed order (whichever is lower)</li>
            <li><strong>STT/CTT:</strong> 0.02% on sell side</li>
            <li><strong>Transaction Charges:</strong> NSE: 0.00173%, BSE: 0</li>
            <li><strong>GST:</strong> 18% on (brokerage + SEBI charges + transaction charges)</li>
            <li><strong>SEBI Charges:</strong> ₹10 per crore</li>
            <li><strong>Stamp Charges:</strong> 0.002% or ₹200 per crore (buy side)</li>
          </ul>
        </div>
      </div>

      {/* F&O Options */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h4 className="card-title">F&O – Options</h4>
          <ul>
            <li><strong>Brokerage:</strong> Flat ₹20 per executed order</li>
            <li>
              <strong>STT/CTT:</strong>
              <ul>
                <li>0.125% of intrinsic value on exercised options</li>
                <li>0.1% on sell side (on premium)</li>
              </ul>
            </li>
            <li><strong>Transaction Charges:</strong> NSE: 0.03503% (on premium), BSE: 0.0325% (on premium)</li>
            <li><strong>GST:</strong> 18% on (brokerage + SEBI charges + transaction charges)</li>
            <li><strong>SEBI Charges:</strong> ₹10 per crore</li>
            <li><strong>Stamp Charges:</strong> 0.003% or ₹300 per crore (buy side)</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Equity;