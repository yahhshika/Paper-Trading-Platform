import { orders } from "../../../data/data";
function OpenOrders() {
    let openOrders = orders.filter(ord=>ord["status"]==="open");
    return (<>
    <div className="table-responsive-sm hide-x" style={{marginBottom:"3%"}}>
        
        <table class="table ">
            <thead>
                <tr>
                    <th scope="col"><h6 className="font-400"> Order Id</h6></th>
                    <th scope="col"><h6 className="font-400"> Symbol</h6></th>
                    <th scope="col"><h6 className="font-400"> Side</h6></th>
                    <th scope="col"><h6 className="font-400"> Order Type</h6></th>
                    <th scope="col"><h6 className="font-400"> Qty</h6></th>
                    <th scope="col"><h6 className="font-400"> Price</h6></th>
                    <th scope="col"><h6 className="font-400"> Time-Stamp</h6></th>
    
                </tr>
            </thead>
            <tbody>

                {openOrders.map((order, index)=>{
            
                    return(
                        <tr  key={index}>
                            <td className="funds"><span className="font-100 " >{order.orderId}</span></td>
                            <td className="funds"><span className="font-100 " >{order.symbol}</span></td>
                            <td className="funds"><span className="font-100 " >{order.side}</span></td>
                            <td className="funds"><span className="font-100 " >{order.orderType}</span></td>
                            <td className="funds"><span className="font-100 " >{order.qty}</span></td>
                            <td className="funds"><span className="font-100 " >{order.price||"-"}</span></td>
                            <td className="funds"><span className="font-100 " >{order.timestamp}</span></td>
                       
                            
                    
                        </tr>

                    )
                })}
        

            
            </tbody>
        </table>
    </div>
        
    
    
    
    </>);
}

export default OpenOrders;