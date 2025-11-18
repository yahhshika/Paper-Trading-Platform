import { unrealisedPNl } from "../../../../data/data";
function Unrealised() {
    return ( <>
    <div className="table-responsive-sm hide-x" style={{ marginBottom: "3%" }}>
    
        <table class="table ">
            <thead>
                <tr>
                    <th scope="col"><h6 className="font-400"> Symbol</h6></th>
                    <th scope="col"><h6 className="font-400"> Qty</h6></th>
                    <th scope="col"><h6 className="font-400"> Average Buy Price</h6></th>
                    <th scope="col"><h6 className="font-400"> LTP</h6></th>
                    <th scope="col"><h6 className="font-400"> Unrealised P&L</h6></th>
                
                </tr>
            </thead>
            <tbody>

                {unrealisedPNl.map((trade, index) => {

                    return (
                        <tr key={index}>
                            <td className="funds"><span className="font-100 " >{trade.symbol} </span></td>
                            <td className="funds"><span className="font-100 " >{trade.qty} </span></td>
                            <td className="funds"><span className="font-100 " >{trade.avgBuyPrice} </span></td>
                            <td className="funds"><span className="font-100 " >{trade.ltp} </span></td>
                            <td className="funds"><span className={`font-100 ${trade.unrealisedPnl>=0.0?"color-green":"color-red"}`} >{trade.unrealisedPnl} </span></td>



                        </tr>

                    )
                })}



            </tbody>
        </table>
    </div>
    
    
    </> );
}

export default Unrealised;