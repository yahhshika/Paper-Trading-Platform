function MarketOrder() {
    return ( 
    <div class="row">
        <div class="col">
            <input type="number" class="form-control" placeholder="Qty." aria-label="First name"/>
        </div>
        <div class="col">
            <input type="number" disabled class="form-control" placeholder="123.45" aria-label="Last name"/>
        </div>
    </div> );
}

export default MarketOrder;