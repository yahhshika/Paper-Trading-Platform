import UserContext from "../../../contexts/UserContext/UserContext";
import { useContext, useState, useRef } from "react";

function FundsUpper() {
    let ref1 = useRef();
    let {user, addFunds} = useContext(UserContext);
    let [funds, setFunds] = useState(0)
    let onChangeHandler = (event)=>{
        setFunds(event.target.value);
    }

    let onSubmitHandler = (event)=>{
        event.preventDefault();
        addFunds(funds);
        setFunds(0);
        ref1.current.click();
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
            <button class="btn btn-outline-secondary" type="button">Withdraw Funds</button>
        </div>

        {/* Modal */}
        <div class="modal fade" id="addfundsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Add Funds</h1>
                <button type="button" ref={ref1} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form onSubmit={onSubmitHandler}>
                    <div class="mb-3">
                        <label for="morefunds" class="form-label">Add More Funds</label>
                        <input type="number" class="form-control" id="morefunds" value={funds} onChange={onChangeHandler} aria-describedby="emailHelp"/>
                     
                    </div>
                   
                    <button type="submit" class="btn btn-primary">Add Funds</button>
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