function FundsUpper() {
    return (<div className="container border p-2">
        <h1 className="font-300">Funds</h1>
        <div className="row p-3">
            <div className="col-lg-6 col-sm-12 border">
                <p className="fs-5 font-200">Available cash</p>
                <h3>&#8377; 7.489,44</h3>
            </div>
            <div className="col-lg-6 col-sm-12 border">
                <p className="fs-5 font-200">Collateral(liquid)</p>
                <h3>&#8377; 0.00</h3>
            </div>
    
            
        </div>
        <div class="d-grid gap-2 d-md-block mt-5">
            <button class="btn btn-outline-success me-2" type="button">Add Funds</button>
            <button class="btn btn-outline-secondary" type="button">Withdraw Funds</button>
        </div>
    </div>);
}

export default FundsUpper;