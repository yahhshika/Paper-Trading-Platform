import { useState } from "react";
import Equity from "./Equity";
import Currency from "./Currency";
import Commodity from "./Commodity";
function Brokerage() {
    let [active, setActive] = useState('A');
    let onClickHandlerA = ()=>{
        setActive('A')
    }
    let onClickHandlerB = ()=>{
        setActive('B')
    }
    let onClickHandlerC = ()=>{
        setActive('C')
    }

    return ( <div className="container pt-5">
        <div className="row mb-3">
            <div className="col-2 text-center pointer" style={{cursor:"pointer", borderBottom: active === 'A' ? "2px solid #387ed1" : "0"}}>
                <h4 style={{color:"#387ed1"}} onClick={onClickHandlerA}>Equity</h4>
            </div>
            <div className="col-2 text-center" style={{cursor:"pointer",borderBottom: active === 'B' ? "2px solid #387ed1" : "0"}}>
                <h4 style={{color:"#387ed1"}} onClick={onClickHandlerB}>Currency</h4>
            </div>
            <div className="col-2 text-center" style={{cursor:"pointer", borderBottom: active === 'C' ? "2px solid #387ed1" : "0"}}>
                <h4 style={{color:"#387ed1"}} onClick={onClickHandlerC}>Commodity</h4>
            </div>
        </div>

        <div>{active === 'A' && <Equity/>}</div>
        <div>{active === 'B' && <Currency/>}</div>
        <div>{active === 'C' && <Commodity/>}</div>

    </div> );
}

export default Brokerage;