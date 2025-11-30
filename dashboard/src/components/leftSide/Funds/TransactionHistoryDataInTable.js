import { transactionHistory } from "../../../data/data";
import TransactionContext from "../../../contexts/TransactionsContext/TransactionContext";
import { useContext } from "react";
function TransactionHistoryDataInTable() {
    let {transactions} = useContext(TransactionContext);

    return (<>
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

                {transactions.map((transaction, index)=>{
            
                    return(
                        <tr  key={index}>
                            <td className="funds"><span className="font-100 " >{transaction.date}  </span></td>
                            <td className="funds"><span className="font-100 " > {transaction.type}</span></td>
                            <td className="funds"><span className="font-100 " >{transaction.amount}  </span></td>
                            <td className="funds"><span className="font-100 " > {transaction.status} </span></td>
                            <td className="funds"><span className="font-100 " >{transaction.refNo}  </span></td>
                            <td className="funds"><span className="font-100 " ><i>{transaction.remarks}</i>  </span></td>
                            
                    
                        </tr>

                    )
                })}
        

            
            </tbody>
        </table>
    </div>
    
    </> );
}

export default TransactionHistoryDataInTable;