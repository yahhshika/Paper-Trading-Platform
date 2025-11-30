import { useState, useContext } from "react";
import OrdersContext from "./OrdersContext";
import { ordersInitData } from "../DummyData";
import { v4 as uuidv4 } from 'uuid';
import AllStockContext from "../AllStocksContext/AllStocksContext";
import MarketContext from "../MarketDataContext/MarketDataContext";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext/UserContext";
// import 
function OrdersState({children}) {
    let navigate = useNavigate();
    let {allStocks} = useContext(AllStockContext);
    let {addToPositions} = useContext(MarketContext);
    let {user, addFunds, removeFunds} = useContext(UserContext);
    let [allOrders, setAllOrders] = useState(ordersInitData);
    let cancelOpenOrder = (orderid)=>{
        setAllOrders(prev=>{
            return prev.filter(ord=>ord.orderId!==orderid);
        })
    } 
    // for buy
    let addOpenOrderBuy = (orderData)=>{
        // orderData.orderId = uuidv4();
        // let targetStock = allStocks.find(ord=>ord.symbol===orderData.symbol);
        // if(!targetStock){
        //     console.log(targetStock);
        //     return;
        // }
        // console.log(targetStock);
        // console.log("orderData: ", orderData)
        setAllOrders(prev=>{
            return [...prev, orderData];
        })
        navigate("/orders")
        
    }
    let addExecutedOrders = (orderData)=>{
        console.log("orderData: ", orderData);
        let userBal = Number(user.funds.availableCash) + Number(user.funds.collateral);
        if(Number(userBal) < Number(orderData.ltp)*Number(orderData.qty)){
            console.log("not enough bal");
            return;
        }
        addToPositions(orderData);
        removeFunds(Number(orderData.ltp)*Number(orderData.qty))
        setAllOrders(prev=>{
            return [...prev,{...orderData}]
        })
        navigate("/positions")

    }
    let addExecutedOrdersSell = (orderData)=>{
          setAllOrders(prev=>{
            return [...prev, orderData];
        })
        // removeFunds(Number(orderData.price)*Number(orderData.qty))
        // work : remove from source as well. 
        // navigate("/orders")
    }

    return ( <OrdersContext.Provider value={{allOrders, setAllOrders, cancelOpenOrder,addOpenOrderBuy, addExecutedOrders, addExecutedOrdersSell}}>
        {children}
    </OrdersContext.Provider> );
}

export default OrdersState;