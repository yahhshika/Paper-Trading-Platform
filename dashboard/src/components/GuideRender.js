import Topbar from "./leftSide/Topbar";
import Guide from "./guide/Guide";
function GuideRender() {
    return ( <div className="row m-0">


            <div className="col-lg-12 p-0">
                <Topbar></Topbar>
                <Guide></Guide>
            </div>
         

    
    </div> );
}

export default GuideRender;