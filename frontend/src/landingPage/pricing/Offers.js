function Offers() {
    return ( <div className="container my-5 pt-5">
        <div className="row">
            <div className="card col border-0">
                <img src="media/images/pricing0.svg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h3 className="card-title text-center">Free equity delivery</h3>
                    <p className="card-text">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage</p>
                </div>
            </div>
            <div className="card col border-0">
                <img src="media/images/intradayTrades.svg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h3 className="card-title text-center">Intraday and F&O trades</h3>
                    <p className="card-text">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
            </div>
            <div className="card col border-0">
                <img src="media/images/pricing0.svg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h3 className="card-title text-center">Free direct MF</h3>
                    <p className="card-text">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>

        </div>

    </div> );
}

export default Offers;