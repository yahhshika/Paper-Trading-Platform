import UserContext from "../../../contexts/UserContext/UserContext";
import { useContext, useState, useRef } from "react";
import TransactionContext from "../../../contexts/TransactionsContext/TransactionContext";
import { v4 as uuidv4 } from 'uuid';
function FundsUpper() {
    let {addNewTransaction} = useContext(TransactionContext);
    let ref1 = useRef();
    let ref2 = useRef();

    let {user, addFunds, removeFunds} = useContext(UserContext);
    let [fundsData, setFundsData] = useState({funds: 0, remarks:""})
    let onChangeHandler = (event)=>{
        setFundsData(prev=>{
            return {...prev, [event.target.name]:event.target.value}
        });
    }

    let onSubmitHandlerAddFunds = (event)=>{
        event.preventDefault();
        addFunds(fundsData.funds);
        setFundsData({funds: 0, remarks:""});
        addNewTransaction({
            id: "TXN2010",
            date: Date.now(),
            type: "funds_added",
            amount: fundsData.funds,
            status: "successful",
            refNo: uuidv4(),
            remarks: fundsData.remarks,
        })
        ref1.current.click();
    }
    let onSubmitHandlerRemoveFunds = (event)=>{
        event.preventDefault();
        removeFunds(fundsData.funds);
        setFundsData({funds: 0, remarks:""});
        addNewTransaction({
            id: "TXN2010",
            date: Date.now(),
            type: "withdrawal",
            amount: fundsData.funds,
            status: "successful",
            refNo: uuidv4(),
            remarks: fundsData.remarks,
        })
        ref2.current.click();
    }

    return (<div className="container border p-2">
        <h1 className="font-300">Funds</h1>
        <div className="row p-3">
            <div className="col-lg-6 col-sm-12 border">
                <p className="fs-5 font-200">Available cash</p>
                <h3>&#8377; {user.funds.availableCash}</h3>
            </div>
            <div className="col-lg-6 col-sm-12 border">
                <p className="fs-5 font-200">Collateral(liquid)</p>
                <h3>&#8377; {user.funds.collateral}</h3>
            </div>
    
            
        </div>
        <div class="d-grid gap-2 d-md-block mt-5">
            <button class="btn btn-outline-success me-2" data-bs-toggle="modal" data-bs-target="#addfundsModal" type="button">Add Funds</button>
            <button class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#removefundsModal"  type="button">Withdraw Funds</button>
        </div>

        {/* Modal: add Funds */}
        <div class="modal fade" id="addfundsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Add Funds</h1>
                <button type="button"  class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form onSubmit={onSubmitHandlerAddFunds}>
                    <div class="mb-3">
                        <label for="morefunds" class="form-label">Add More Funds</label>
                        <input type="number" class="form-control" id="morefunds" value={fundsData.funds} name="funds" onChange={onChangeHandler} aria-describedby="emailHelp"/>

                        <label for="morefundsremarks" class="form-label">Remarks</label>
                        <input type="text" class="form-control" name="remarks"  id="morefundsremarks" value={fundsData.remarks} onChange={onChangeHandler} aria-describedby="emailHelp"/>
                     
                    </div>
                   
                    <button type="submit" class="btn btn-primary">Add Funds</button>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref={ref1}>Close</button>
            </div>
            </div>
        </div>
        </div>
        {/* Modal: remove funds */}
        <div class="modal fade" id="removefundsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Withdraw Funds</h1>
                <button type="button" ref={ref2} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form onSubmit={onSubmitHandlerRemoveFunds}>
                    <div class="mb-3">
                        <label for="morefunds" class="form-label">Withdraw Funds</label>
                        <input type="number" class="form-control" id="morefunds" value={fundsData.funds} name="funds" onChange={onChangeHandler} aria-describedby="emailHelp"/>

                        <label for="morefundsremarks" class="form-label">Withdraw Funds</label>
                        <input type="text" class="form-control" id="morefundsremarks" value={fundsData.remarks} name="remarks" onChange={onChangeHandler} aria-describedby="emailHelp"/>
                     
                    </div>
                   
                    <button type="submit" class="btn btn-primary">Withdraw</button>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
    </div>);
}

export default FundsUpper;