function MarketOrder({stockToBuy}) {
    return ( 
    <div class="row">
        <p className="font-200">{(stockToBuy&&stockToBuy.symbol) || ""}</p>

        <div class="col">
            <input type="number" class="form-control" placeholder="Qty." aria-label="First name"/>
        </div>
        <div class="col">
            <input type="number" disabled class="form-control" placeholder={(stockToBuy&& stockToBuy.ltp) || 0} aria-label="Last name"/>
        </div>

    </div> );
}

export default MarketOrder;