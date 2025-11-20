


import MarketOrder from './MarketOrder';
import LimitOrder from './LimitOrder';
import { useState } from 'react';

function BuySellModels({stockToBuy}) {
    let [mode, setMode] = useState("marketOrder");
    let handleMode = (newmode)=>{
        setMode(newmode);
    }
    return ( <>
    {/* models: */}
    {/* model 1 */}
    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header row">
                <p class="modal-title fs-5 col cursor-pointer text-center" id="exampleModalLabel" onClick={()=>{handleMode("marketOrder")}} style={{borderBottom:mode==="marketOrder"?"0.75px solid #5f5f5fff":"",backgroundColor:mode==="marketOrder"?"#f2f2f2":"" }}>Market Order</p>
                <p class="modal-title fs-5 col text-center" id="exampleModalLabel" onClick={()=>{handleMode("limitOrder")}} style={{borderBottom:mode==="limitOrder"?"0.75px solid #5f5f5fff":"", backgroundColor:mode==="limitOrder"?"#f2f2f2":""}}>Limit Order</p>
            </div>
            <div class="modal-body">
                {mode==="marketOrder"? <MarketOrder stockToBuy={stockToBuy} />:<LimitOrder stockToBuy={stockToBuy}/>}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Buy</button>
            </div>
            </div>
        </div>
    </div>

    {/* model 2 */}
    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>    
    
    </> );
}

export default BuySellModels;