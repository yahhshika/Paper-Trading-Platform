import { Link ,Route, Routes} from "react-router-dom";
import Tradebook from "./Tradebook";
import PnL from "./PnL";
import { useState } from "react";
function Report() {
    let [selectedMenu, setSelectedMenu] = useState("tradebook");
    let handleMenuChange = (menu)=>{
        setSelectedMenu(menu);
    }
    return ( <>
    <div className="container p-3">
        <h1 className="font-300 border-bottom mb-5">Reports</h1>
        {/* <hr className="mb-5"></hr> */}
        <div className="row">
            <h3 className={`col font-300 text-center cursor-pointer ${selectedMenu==="tradebook"?"border-bottom":""}`} style={{backgroundColor:selectedMenu==="tradebook"?"#f2f2f2":""}} onClick={()=>{handleMenuChange("tradebook")}}>Tradebook</h3>
            <h3 className={`col font-300 cursor-pointer text-center ${selectedMenu==="pnl"?"border-bottom":""}`} style={{backgroundColor:selectedMenu==="pnl"?"#f2f2f2":""}} onClick={()=>{handleMenuChange("pnl")}}>PnL</h3>
        </div>
     

    {selectedMenu==="tradebook" && <Tradebook/>}
    {selectedMenu==="pnl" && <PnL/>}
    </div>
    </> );
}

export default Report;