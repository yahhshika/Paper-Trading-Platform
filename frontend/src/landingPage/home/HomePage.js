import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import OpenAccount from "../OpenAccount";
import Education from "./Education";
function HomePage() {
    return ( <>
    <Hero/>
    {/* <Awards/> */}
    <Stats/>
    {/* <Pricing/> */}
    <Education/>
    <OpenAccount/>
    </> );
}

export default HomePage;