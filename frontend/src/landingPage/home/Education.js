import { Link } from "react-router-dom";
function Education() {
    return (<div className="container mb-5">
        <div className="row p-3">
            <div className="col-lg-6 col-md-12 card text-center border-0">
                <img src="media/images/education.svg" className="card-img-top mb-3" alt="..."></img>
            </div>
            <div className="col-lg-6 col-md-12 align-items-center d-flex">

                <div className="card border-0">
                    <div className="card-body">
                        <h3 className="card-title mb-3" style={{color:"#424242"}}>Free and open market education</h3>

                        <p className="card-text" style={{color:"#424242"}}>Not just an app, but Link whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        <Link to="#" className="card-link text-decoration-none" style={{color:"#387ed1"}}>Varsity <i className="fa-solid fa-arrow-right mb-5"></i></Link>

                        <p className="card-text" style={{color:"#424242"}}>TradingQ&Link, the most active trading and investment community in India for all your market related queries.</p>
                        <Link to="#" className="card-link text-decoration-none" style={{color:"#387ed1"}}>TradingQ&Link <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    
    </div>);
}

export default Education;