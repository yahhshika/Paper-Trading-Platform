import { Link } from "react-router-dom";

function Stats() {
    return (
        <div className="container mb-5">
            <div className="row">

                {/* LEFT CONTENT */}
                <div className="col-lg-6 col-md-12">
                    <h3 className="card-title ps-3">
                        Trade with confidence
                    </h3>

                    <div className="card border-0">
                        <div className="card-body">
                            <h3 className="card-title">
                                Learn-first approach
                            </h3>
                            <p className="card-text">
                                TradeGuru is built for beginners and aspiring traders who want to learn the market safely.
                                With virtual funds and real-time market data, you understand trading concepts without
                                the fear of losses.
                            </p>
                        </div>
                    </div>

                    <div className="card border-0">
                        <div className="card-body">
                            <h3 className="card-title">
                                No risk. No losses. No pressure.
                            </h3>
                            <p className="card-text">
                                Every trade happens with virtual money — no real money is used.
                                Practice freely, experiment with strategies, make mistakes, and
                                learn at your own pace without any financial stress.
                            </p>
                        </div>
                    </div>

                    <div className="card border-0">
                        <div className="card-body">
                            <h3 className="card-title">
                                A complete learning ecosystem
                            </h3>
                            <p className="card-text">
                                From charts to analytics to order simulations, TradeGuru brings everything in one place.
                                Whether you're testing intraday strategies or long-term investing styles,
                                you get all the essential tools for hands-on practice.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="col-lg-6 col-md-12 card text-center border-0">
  <img
  src="/media/images/ecosystem.svg"
  className="card-img-top mb-3"
  alt="TradeGuru Ecosystem"
/>

</div>
            </div>
        </div>
    );
}

export default Stats;
