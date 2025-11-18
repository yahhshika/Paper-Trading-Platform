import { realisedPNl } from "../../../../data/data";
function Realised() {
    return (<>
        <div className="table-responsive-sm hide-x" style={{ marginBottom: "3%" }}>

            <table class="table ">
                <thead>
                    <tr>
                        <th scope="col"><h6 className="font-400"> Symbol</h6></th>
                        <th scope="col"><h6 className="font-400"> Qty</h6></th>
                        <th scope="col"><h6 className="font-400"> Average Buy Price</h6></th>
                        <th scope="col"><h6 className="font-400"> Sell Price</h6></th>
                        <th scope="col"><h6 className="font-400"> Realised P&L</h6></th>
                    
                    </tr>
                </thead>
                <tbody>

                    {realisedPNl.map((trade, index) => {

                        return (
                            <tr key={index}>
                                <td className="funds"><span className="font-100 " >{trade.symbol} </span></td>
                                <td className="funds"><span className="font-100 " >{trade.qty} </span></td>
                                <td className="funds"><span className="font-100 " >{trade.avgBuyPrice} </span></td>
                                <td className="funds"><span className="font-100 " >{trade.sellPrice} </span></td>
                                <td className="funds"><span className={`font-100 ${trade.realisedPnl>=0.0?"color-green":"color-red"}`} >{trade.realisedPnl} </span></td>



                            </tr>

                        )
                    })}



                </tbody>
            </table>
        </div>


    </>);
}

export default Realised;