
function LimitOrder({stockToBuy}) {
    return ( 
    <div class="row">
        <p className="font-200">{(stockToBuy&&stockToBuy.symbol) || ""}</p>
        <div class="col">
            <input type="number" class="form-control" placeholder="Qty." aria-label="First name"/>
        </div>
        <div class="col">
            <input type="number" class="form-control" placeholder="Eg. 123.45" aria-label="1234.5"/>
        </div>

    </div> );
}

export default LimitOrder;