import { Link } from "react-router-dom";
function Hero() {
    return (
        <>
        <div className="container mb-5" >

            <div className="card text-center border-0 p-5">
                <img src="media/images/homeHero.png" className="card-img-top mb-3" alt="..."></img>
             
                <div className="card-body">
                    <h1 className="card-title" style={{color:"#424242"}}>Invest in everything</h1>
                    <p className="card-text" style={{color:"#424242"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <Link to="#" className="btn btn-primary">Sign up for free</Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default Hero;