function MarketOrderSell({source, order, detailsForOrderToSell, setDetailsforOrderToSell}) {
    let onChangeHandler = (event)=>{
        setDetailsforOrderToSell(prev=>{
            return {...prev, qty: event.target.value}
        })
    }
    return (<> 
    <div class="row">
        <p className="font-200">{order && order.symbol}</p>

        <div class="col">
            <input type="number" class="form-control" placeholder="Qty." aria-label="First name" value={detailsForOrderToSell.qty} name="qty" onChange={onChangeHandler}/>
        </div>
        <div class="col">
            <input type="number" disabled class="form-control" aria-label="Last name" value={order ? order.ltp : 0}/>
        </div>

    </div> 
    
    </>  );
}

export default MarketOrderSell;