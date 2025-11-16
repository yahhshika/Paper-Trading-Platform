function Currency() {
    return (
        <div className="container my-5">

            {/* Currency Futures */}
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h4 className="card-title">Currency Futures</h4>
                    <ul>
                        <li><strong>Brokerage:</strong> 0.03% or ₹20 per executed order (whichever is lower)</li>
                        <li><strong>STT/CTT:</strong> No STT</li>
                        <li>
                            <strong>Transaction Charges:</strong>
                            <ul>
                                <li>NSE: 0.00035%</li>
                                <li>BSE: 0.00045%</li>
                            </ul>
                        </li>
                        <li><strong>GST:</strong> 18% on (brokerage + SEBI charges + transaction charges)</li>
                        <li><strong>SEBI Charges:</strong> ₹10 per crore</li>
                        <li><strong>Stamp Charges:</strong> 0.0001% or ₹10 per crore on buy side</li>
                    </ul>
                </div>
            </div>

            {/* Currency Options */}
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h4 className="card-title">Currency Options</h4>
                    <ul>
                        <li><strong>Brokerage:</strong> ₹20 per executed order</li>
                        <li><strong>STT/CTT:</strong> No STT</li>
                        <li>
                            <strong>Transaction Charges:</strong>
                            <ul>
                                <li>NSE: 0.0311%</li>
                                <li>BSE: 0.001%</li>
                            </ul>
                        </li>
                        <li><strong>GST:</strong> 18% on (brokerage + SEBI charges + transaction charges)</li>
                        <li><strong>SEBI Charges:</strong> ₹10 per crore</li>
                        <li><strong>Stamp Charges:</strong> 0.0001% or ₹10 per crore on buy side</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Currency;