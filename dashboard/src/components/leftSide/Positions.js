import { positions } from "../../data/data";
import "./Positions.css";
function Positions() {
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
                            const currVal = stock.price * stock.qty; //the amount you hold
                            const profit =  currVal - stock.avg*stock.qty;
                            const isProfit = currVal - stock.avg*stock.qty >=0.0 ;
                            const profClass = isProfit?"color-green":"color-red";
                            const dayLoss = stock.isLoss?"color-red":"color-green";
                            console.log(stock)
                            return(
                                <tr key={index}>
                                    <td className="positions"><span className="font-100">  {stock.product} </span></td>
                                    <td className="positions"><span className="font-100">  {stock.name} </span></td>
                                    <td className="positions"><span className="font-100">  {stock.qty} </span></td>
                                    <td className="positions"><span className="font-100">  {stock.avg.toFixed(2)} </span></td>
                                    <td className="positions"><span className="font-100">  {stock.price.toFixed(2)} </span></td>
                                    <td className="positions"><span className={`font-100 ${profClass}`}  >  {profit.toFixed(2)} </span></td>
                                    <td className="positions"><span className={`font-100 ${dayLoss}`}>  {stock.day}</span></td>
                            
                                </tr>
    
                            )
                        })}
               
    
                  
                    </tbody>
                </table>
            </div>
        </div>);
}

export default Positions;