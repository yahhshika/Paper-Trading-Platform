import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import OpenAccount from "../OpenAccount"
function ProductPage() {
    return ( 
        <>
            <Hero/>
            <div className="container row p-5">
                <div className="col-lg-6 col-md-12">
                    <LeftSection/>
                </div>
                <div className="col-lg-6 col-md-12 d-flex align-items-center">
                    <RightSection/>
                </div>
            </div>
            <OpenAccount></OpenAccount>
        
        </>
     );
}

export default ProductPage;