import { tradebook } from "../../../data/data";
function Tradebook() {
    return ( <>
    <div className="table-responsive-sm hide-x" style={{marginBottom:"3%"}}>
    
        <table class="table ">
            <thead>
                <tr>
                    <th scope="col"><h6 className="font-400"> Trade Id</h6></th>
                    <th scope="col"><h6 className="font-400"> order Id</h6></th>
                    <th scope="col"><h6 className="font-400"> Symbol</h6></th>
                    <th scope="col"><h6 className="font-400"> Side</h6> </th>
                    <th scope="col"><h6 className="font-400"> Qty.</h6></th>
                    <th scope="col"><h6 className="font-400"> Price</h6></th>
                    <th scope="col"><h6 className="font-400"> Trade Value</h6></th>
                    <th scope="col"><h6 className="font-400"> Trade Type</h6></th>
                    <th scope="col"><h6 className="font-400"> Executed At</h6></th>
                    <th scope="col"><h6 className="font-400"> Status</h6></th>
                </tr>
            </thead>
            <tbody>

                {tradebook.map((trade, index)=>{
            
                    return(
                        <tr  key={index}>
                            <td className="funds"><span className="font-100 " >{trade.tradeId} </span></td>
                            <td className="funds"><span className="font-100 " >{trade.orderId} </span></td>
                            <td className="funds"><span className="font-100 " >{trade.symbol} </span></td>
                            <td className="funds"><span className="font-100 " >{trade.side} </span></td>
                            <td className="funds"><span className="font-100 " >{trade.quantity} </span></td>
                            <td className="funds"><span className="font-100 " >{trade.price} </span></td>
                            <td className="funds"><span className="font-100 " >{trade.tradeValue} </span></td>
                            <td className="funds"><span className="font-100 " >{trade.tradeType} </span></td>
                            <td className="funds"><span className="font-100 " >{trade.executedAt} </span></td>
                            <td className="funds"><span className="font-100 " >{trade.status} </span></td>
                            
                    
                        </tr>

                    )
                })}
        

            
            </tbody>
        </table>
    </div>
    
    
    </> );
}

export default Tradebook;