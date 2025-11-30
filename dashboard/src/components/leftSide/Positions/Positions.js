import { positions } from "../../../data/data";
import "./Positions.css";
import MarketContext from "../../../contexts/MarketDataContext/MarketDataContext";
import { useContext, useState } from "react";
import OuterBox from "../../SellBoxes/OuterBox"
function Positions() {
    let {marketData} = useContext(MarketContext);
    let positions = marketData.filter(data=>data.categories.includes("position"));
    let [currOrderToSell, setCurrOrderToSell] = useState(null);
    let onClickCurrOrderToSellHandler = (order)=>{
        setCurrOrderToSell(order)
    }
    return ( <div className="container" style={{paddingTop:"5%"}}>
            <h2 style={{fontWeight:"100"}} className="mb-3">Positions({positions.length})</h2>
            <div className="table-responsive-sm hide-x" style={{marginBottom:"3%"}}>
                <table class="table ">
                    <thead>
                        <tr>
                            <th scope="col"><h6 className="font-200"> Prod.</h6></th>
                            <th scope="col"><h6 className="font-200"> Inst.</h6></th>
                            <th scope="col"><h6 className="font-200"> Qty.</h6></th>
                            <th scope="col"><h6 className="font-200"> Avg.</h6> </th>
                            <th scope="col"><h6 className="font-200"> LTP</h6></th>
                            <th scope="col"><h6 className="font-200"> P&L</h6></th>
                            <th scope="col"><h6 className="font-200"> Chg.</h6></th>
                       
                        </tr> 
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td><span className="font-100">  Mark </span></td>
                            <td><span className="font-100">  Otto </span></td>
                            <td><span className="font-100">  Otto </span></td>
                            <td><span className="font-100">  @mdo </span></td>
                            <td><span className="font-100">  @mdo </span></td>
                            <td><span className="font-100">  @mdo </span></td>
                            <td><span className="font-100">  @mdo </span></td>
                            <td><span className="font-100">  @mdo </span></td>
                     
                        </tr> */}
                        {positions.map((stock, index)=>{
                            const currVal = stock.ltp * stock.qty; //the amount you hold
                            const profit =  currVal - stock.avgPrice*stock.qty;
                            const isProfit = currVal - stock.avgPrice*stock.qty >=0.0 ;
                            const profClass = isProfit?"color-green":"color-red";
                            const dayLoss = stock.isLoss?"color-red":"color-green";
                            console.log(stock)
                            return(
                                <tr key={index} className="cursor-pointer" data-bs-toggle="modal" data-bs-target="#sellOrders" onClick={()=>{onClickCurrOrderToSellHandler(stock)}}>
                                    <td className="positions"><span className="font-100">  {stock.symbol} </span></td>
                                    <td className="positions"><span className="font-100">  {stock.company} </span></td>
                                    <td className="positions"><span className="font-100">  {stock.qty} </span></td>
                                    <td className="positions"><span className="font-100">  {stock.avgPrice} </span></td>
                                    <td className="positions"><span className="font-100">  {stock.ltp} </span></td>
                                    <td className="positions"><span className={`font-100 ${profClass}`}  >  {profit} </span></td>
                                    <td className="positions"><span className={`font-100 ${dayLoss}`}>  {stock.day}</span></td>
                            
                                </tr>
    
                            )
                        })}
               
    
                  
                    </tbody>
                </table>
            </div>
            <OuterBox source={"position"} order={currOrderToSell}></OuterBox>

        </div>);
}

export default Positions;