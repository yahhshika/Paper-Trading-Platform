import { transactionHistory } from "../../../data/data";
import "./Funds.css"
function FundsTransactionHistory() {
    return ( <>
    <div className="table-responsive-sm hide-x" style={{marginBottom:"3%"}}>

            <table class="table ">
                <thead>
                    <tr>
                        <th scope="col"><h6 className="font-400"> Date</h6></th>
                        <th scope="col"><h6 className="font-400"> Type</h6></th>
                        <th scope="col"><h6 className="font-400"> Amt.</h6></th>
                        <th scope="col"><h6 className="font-400"> Status</h6> </th>
                        <th scope="col"><h6 className="font-400"> ref.</h6></th>
                        <th scope="col"><h6 className="font-400"> Remarks</h6></th>
                    </tr>
                </thead>
                <tbody>
    
                    {transactionHistory.slice(0, 10).map((stock, index)=>{
              
                        return(
                            <tr  key={index}>
                                <td className="funds"><span className="font-100 " >{stock.date}  </span></td>
                                <td className="funds"><span className="font-100 " > {stock.type}</span></td>
                                <td className="funds"><span className="font-100 " >{stock.amount}  </span></td>
                                <td className="funds"><span className="font-100 " > {stock.status} </span></td>
                                <td className="funds"><span className="font-100 " >{stock.refNo}  </span></td>
                                <td className="funds"><span className="font-100 " ><i>{stock.remarks}</i>  </span></td>
                               
                        
                            </tr>

                        )
                    })}
           

              
                </tbody>
            </table>
        </div>
    
    
    
    
    </> );
}

export default FundsTransactionHistory;