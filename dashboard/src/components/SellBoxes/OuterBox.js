import MarketOrderSell from "./MarketOrderSell";
import LimitOrderSell from "./LimitOrderSell";
import { useContext, useState } from "react";
import OrdersContext from "../../contexts/OrdersContext/OrdersContext";
import MarketContext from "../../contexts/MarketDataContext/MarketDataContext";
import { v4 as uuidv4 } from 'uuid';
import { useRef } from "react";
import UserContext from "../../contexts/UserContext/UserContext";
function Outerbox({source, order}) {
    let ref1 = useRef();
    let {addOpenOrderBuy, addExecutedOrdersSell} = useContext(OrdersContext);
    let {removeFromPosition, removeFromHolding} = useContext(MarketContext);
    let {addFunds} = useContext(UserContext);
    let [mode, setMode] = useState("MARKET");
    let handleMode = (newmode)=>{
        setMode(newmode); 
    }
    let [detailsForOrderToSell, setDetailsforOrderToSell] = useState({qty:0, price: 0});
    let onSubmitHandler = (event)=>{
        event.preventDefault();
        if(mode==="LIMIT"){
            handleLimit();
      
        }else{
            handleMarket();
        }

        ref1.current.click();
       

    }
    let handleLimit = ()=>{
         addOpenOrderBuy({
            orderId:uuidv4(),
            symbol: order.symbol,
            company: order.company,
            ltp: order.ltp,
            side: "SELL",
            qty:detailsForOrderToSell.qty,
            price: detailsForOrderToSell.price,
            status: "open",
            source:detailsForOrderToSell.source,
            timestamp:Date.now()
        })
        // addFunds(Number(detailsForOrderToSell.price) * Number(detailsForOrderToSell.qty));

    
        setDetailsforOrderToSell({qty:0, price: 0})
    }
    let handleMarket = ()=>{
        addExecutedOrdersSell({
            orderId:uuidv4(),
            symbol: order.symbol,
            company: order.company,
            ltp: order.ltp,
            side: "SELL",
            qty:detailsForOrderToSell.qty,
            price: order.ltp,
            status: "executed",
            source:detailsForOrderToSell.source,
            timestamp:Date.now()
        })
        if(source==="position"){

            removeFromPosition({  orderId:uuidv4(),
                symbol: order.symbol, 
                company: order.company,
                ltp: order.ltp,
                side: "SELL",
                qty:detailsForOrderToSell.qty,
                price: order.ltp,
                status: "executed",
                source:detailsForOrderToSell.source,
                timestamp:Date.now()
            });
        }else if(source==="holding"){
            removeFromHolding({
                orderId:uuidv4(),
                symbol: order.symbol, 
                company: order.company,
                ltp: order.ltp,
                side: "SELL",
                qty:detailsForOrderToSell.qty,
                price: order.ltp,
                status: "executed",
                source:detailsForOrderToSell.source,
                timestamp:Date.now()
            })
        }
        let addOnFunds = Number(Number(order.ltp) * detailsForOrderToSell.qty);
        addFunds(addOnFunds);

        setDetailsforOrderToSell({qty:0, price: 0})

    }
    return (<>
    
    <div class="modal fade" id="sellOrders" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header row border-0">
                <p class="modal-title fs-5 col cursor-pointer text-center" id="exampleModalLabel" onClick={()=>{handleMode("MARKET")}} style={{borderBottom:mode==="MARKET"?"0.75px solid #5f5f5fff":"",backgroundColor:mode==="MARKET"?"#f2f2f2":"" }}>Market Order</p>
                <p class="modal-title cursor-pointer fs-5 col text-center" id="exampleModalLabel" onClick={()=>{handleMode("LIMIT")}} style={{borderBottom:mode==="LIMIT"?"0.75px solid #5f5f5fff":"", backgroundColor:mode==="LIMIT"?"#f2f2f2":""}}>Limit Order</p>
            </div>
                <form onSubmit={onSubmitHandler}>

                    <div class="modal-body">
                        {mode==="MARKET"? <MarketOrderSell source={source} order={order} detailsForOrderToSell={detailsForOrderToSell} setDetailsforOrderToSell={setDetailsforOrderToSell}/>:<LimitOrderSell source={source} order={order} detailsForOrderToSell={detailsForOrderToSell} setDetailsforOrderToSell={setDetailsforOrderToSell} />}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref={ref1}>Close</button>
                        <button type="submit" class="btn btn-primary" 
                        >Sell</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
  
    
    </>  );
}

export default Outerbox;