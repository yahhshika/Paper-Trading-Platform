import { Link } from "react-router-dom";
function Pricing() {
    return (<div className="container mt-5 mb-5">
        <div className="row p-3 pt-5">

            <div className="col-lg-6 col-md-12">
                <div className="card border-0">
                    <div className="card-body">
                        <h3 className="card-title" style={{ color: "#424242" }}>Unbeatable pricing</h3>
                        <p className="card-text" style={{ color: "#424242" }}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        <Link to="#" className="card-link text-decoration-none" style={{color:"#387ed1"}}>See pricing <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="row">
               
                    <div className="card mb-3 col border-0">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="media\images\pricingEquity.svg" className="img-fluid rounded-start h-100" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    
                                    <p className="card-text">Free account opening</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 col border-0">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="media\images\pricingEquity.svg" className="img-fluid rounded-start h-100" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    
                                    <p className="card-text">Free equity delivery</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 col border-0">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="media\images\intradayTrades.svg" className="img-fluid rounded-start" style={{height:"112%"}} alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    
                                    <p className="card-text">Intraday and F&O</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
              
                </div>
            </div>
        </div>
    </div>);
}

export default Pricing;