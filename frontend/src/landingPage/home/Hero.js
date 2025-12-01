import { Link } from "react-router-dom";

function Hero() {
    return (
        <>
        <div className="container mb-5">

            <div className="card text-center border-0 p-5">
                <img
                    src="/media/images/techdash.svg"
                    alt="TradeGuru Dashboard"
                    style={{ width: "100%", height: "auto" }}
                />

                <div className="card-body">
                    <h1 className="card-title">Invest in everything</h1>

                    <p className="card-text">
                        Zero risk. Real learning.

                        Trade confidently with virtual funds.
                    </p>

                    <Link to="/signup" className="btn btn-primary">Sign up for free</Link>

                </div>
            </div>

        </div>
        </>
    );
}

export default Hero;
