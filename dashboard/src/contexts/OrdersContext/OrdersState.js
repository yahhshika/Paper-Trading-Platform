import { useState } from "react";
import OrdersContext from "./OrdersContext";
import { ordersInitData } from "../DummyData";
function OrdersState({children}) {
    let [allOrders, setAllOrders] = useState(ordersInitData);
    let cancelOpenOrder = (orderid)=>{
        setAllOrders(prev=>{
            return prev.filter(ord=>ord.orderId!==orderid);
        })
    }
    return ( <OrdersContext.Provider value={{allOrders, setAllOrders, cancelOpenOrder}}>
        {children}
    </OrdersContext.Provider> );
}

export default OrdersState;