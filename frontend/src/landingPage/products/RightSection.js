import {Link} from "react-router-dom"
function RightSection() {
    return ( <>
    <div class="card mb-3 border-0">
        <div class="card-body">
            <h5 class="card-title">Kite</h5>
            <p class="card-text">Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
            {/* <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
           <Link to={"/"} className="card-link text-decoration-none" style={{color:"#387ed1"}}>Try it <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
    </div>
    </> );
}

export default RightSection;