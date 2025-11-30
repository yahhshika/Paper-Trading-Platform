
import MarketOrder from './MarketOrder';
import LimitOrder from './LimitOrder';
import { useState, useContext } from 'react';
import OrdersContext from '../../../contexts/OrdersContext/OrdersContext';
import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react';
function BuySellModels({stockToBuy}) {
    let ref1 = useRef();
    let {addOpenOrderBuy, addExecutedOrders} = useContext(OrdersContext);
    let [mode, setMode] = useState("MARKET");
    let handleMode = (newmode)=>{
        setMode(newmode);
    }

    let [inputs, setInputs] = useState({qty:0, price: 0});
    // let handleOnclickBuy = ()=>{
    //     // addOpenOrderBuy(stockToBuy);
    //     // console.log("after clickingbuy"+{...stockToBuy});
    // }

    let handleOrderInputChange = (event)=>{
        setInputs(prev=>{
            return {...prev, [event.target.name]:event.target.value}
        })
    }
    let onSubmitHandler = (event)=>{
        event.preventDefault();
        if(mode==="LIMIT"){
            console.log("limit")
            handleLimitMode();
            return;
        }
        handleMarketMode();
    }
    let handleMarketMode=()=>{
        console.log("market")
        let stockDetailsBought = {
            ...stockToBuy,
            orderId: uuidv4(),
            source:"watchlist", 
            qty :inputs.qty, 
            side:"BUY", 
            orderType:mode, 
            price: stockToBuy.ltp, 
            status:mode==="LIMIT"?"open" : "executed", 
            timestamp:Date.now(),
            avgPrice: stockToBuy.ltp,
        }
        delete stockDetailsBought.quantity; 
        delete stockDetailsBought.categories;
        addExecutedOrders(stockDetailsBought);
        setInputs({qty:0, price: 0});
        console.log("done")
        ref1.current.click();        
    }

    let handleLimitMode = ()=>{
        let stockDetailsBought = {
            ...stockToBuy,
            source:"watchlist", 
            qty :inputs.qty, 
            side:"BUY", 
            orderType:mode, 
            price: stockToBuy.ltp, 
            status:"open" ,
            timestamp:Date.now(),
            avgPrice: inputs.price,
            orderId: uuidv4()
        }
        
        delete stockDetailsBought.categories;
        delete stockDetailsBought.quantity; 
        addOpenOrderBuy(stockDetailsBought);
        setInputs({qty:0, price: 0});
  
        ref1.current.click();
    }

    return ( <>
    {/* models: */}
    {/* model 1 */}
            {/* {stockToBuy && console.log("stockToBuy:"+stockToBuy.symbol)} */}
    
    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header row">
                <p class="modal-title fs-5 col cursor-pointer text-center" id="exampleModalLabel" onClick={()=>{handleMode("MARKET")}} style={{borderBottom:mode==="MARKET"?"0.75px solid #5f5f5fff":"",backgroundColor:mode==="MARKET"?"#f2f2f2":"" }}>Market Order</p>
                <p class="modal-title fs-5 col text-center" id="exampleModalLabel" onClick={()=>{handleMode("LIMIT")}} style={{borderBottom:mode==="LIMIT"?"0.75px solid #5f5f5fff":"", backgroundColor:mode==="LIMIT"?"#f2f2f2":""}}>Limit Order</p>
            </div>
            <form onSubmit={onSubmitHandler}>

                <div class="modal-body">
                    {mode==="MARKET"? <MarketOrder stockToBuy={stockToBuy} handleOrderInputChange={handleOrderInputChange} inputs={inputs} setInputs={setInputs}/>:<LimitOrder stockToBuy={stockToBuy} handleOrderInputChange={handleOrderInputChange} inputs={inputs} setInputs={setInputs}/>}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" ref={ref1} data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary"  >Buy</button>
                </div>
            </form>
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