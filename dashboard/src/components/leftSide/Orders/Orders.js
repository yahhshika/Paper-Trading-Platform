import { useState } from "react";
import OpenOrders from "./OpenOrders";
import TotalOrders from "./TotalOrders";
function Orders() {
    let [selectedMenu, setSelectedMenu] = useState("open");
    let handleMenuChange = (menu)=>{
        setSelectedMenu(menu);
    }
    return ( <>
    <div className="container p-3">
        <h1 className="font-300 border-bottom mb-5">Orders</h1>
        {/* <hr className="mb-5"></hr> */}
        <div className="row">
            <h3 className={`col font-300 text-center cursor-pointer ${selectedMenu==="open"?"border-bottom":""}`} style={{backgroundColor:selectedMenu==="open"?"#f2f2f2":""}} onClick={()=>{handleMenuChange("open")}}>
                Open Orders
            </h3>
            <h3 className={`col font-300 text-center cursor-pointer ${selectedMenu==="total"?"border-bottom":""}`} style={{backgroundColor:selectedMenu==="total"?"#f2f2f2":""}} onClick={()=>{handleMenuChange("total")}}>
                Total Orders
            </h3>
        </div>
        {selectedMenu==="open" && <OpenOrders></OpenOrders>}
        {selectedMenu==="total" && <TotalOrders></TotalOrders>}
     
    </div>
    </> );
}

export default Orders;