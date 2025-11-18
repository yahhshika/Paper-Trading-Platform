
import { transactionHistory } from "../../../data/data";
import FundsTransactionHistory from "./FundsTransactionHistory";
import ViewTransactionHistory from "./ViewTransactionHIstory";
function FundsLower() {
    return (<div className="container mt-5">
        <p className="row">
            <span className="col-6 text-start font-300">Recent Transactions</span>
            <span className="col-6 text-end cursor-pointer" style={{color: "#6262b3"}} data-bs-toggle="modal" data-bs-target="#exampleModal">View Transaction History</span>
        </p>
        <FundsTransactionHistory></FundsTransactionHistory>
        <ViewTransactionHistory></ViewTransactionHistory>

       
    </div>);
}

export default FundsLower;