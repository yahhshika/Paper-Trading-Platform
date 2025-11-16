function Commodity() {
    return (<div className="container my-5">

      {/* Commodity Futures */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h4 className="card-title">Commodity Futures</h4>
          <ul>
            <li><strong>Brokerage:</strong> 0.03% or ₹20 per executed order (whichever is lower)</li>
            <li><strong>STT/CTT:</strong> 0.01% on sell side (Non-Agri)</li>
            <li>
              <strong>Transaction Charges:</strong>
              <ul>
                <li>MCX: 0.0021%</li>
                <li>NSE: 0.0001%</li>
              </ul>
            </li>
            <li><strong>GST:</strong> 18% on (brokerage + SEBI charges + transaction charges)</li>
            <li>
              <strong>SEBI Charges:</strong>
              <ul>
                <li>Agri: ₹1 per crore</li>
                <li>Non-Agri: ₹10 per crore</li>
              </ul>
            </li>
            <li><strong>Stamp Charges:</strong> 0.002% or ₹200 per crore on buy side</li>
          </ul>
        </div>
      </div>

      {/* Commodity Options */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h4 className="card-title">Commodity Options</h4>
          <ul>
            <li><strong>Brokerage:</strong> ₹20 per executed order</li>
            <li><strong>STT/CTT:</strong> 0.05% on sell side</li>
            <li>
              <strong>Transaction Charges:</strong>
              <ul>
                <li>MCX: 0.0418%</li>
                <li>NSE: 0.001%</li>
              </ul>
            </li>
            <li><strong>GST:</strong> 18% on (brokerage + SEBI charges + transaction charges)</li>
            <li><strong>SEBI Charges:</strong> ₹10 per crore</li>
            <li><strong>Stamp Charges:</strong> 0.003% or ₹300 per crore on buy side</li>
          </ul>
        </div>
      </div>

    </div>);
}

export default Commodity;