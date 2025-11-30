function LimitOrderSell({source, order, detailsForOrderToSell, setDetailsforOrderToSell}) {
    let onChangeHandler = (event)=>{
        setDetailsforOrderToSell(prev=>{
            return {...prev, [event.target.name]:event.target.value}
        })
    }
    return ( <>
    <div class="row">
        <p className="font-200">{order && order.symbol}</p>
        
        <div class="col">
            <input type="number" id="qty" max={order ? order.qty:1} min={1} class="form-control" placeholder="Qty." value={detailsForOrderToSell.qty} onChange={onChangeHandler} aria-label="First name" name="qty"/>
            <label htmlFor="Qty" className="form-label">Enter Qty</label>

        </div>
        <div class="col">
            <input type="number" id="price" value={detailsForOrderToSell.price} class="form-control" aria-label="Last name" placeholder="Enter Price" name="price" onChange={onChangeHandler}/>
            <label htmlFor="price" className="form-label">Price Per Stock</label>
        </div>

    </div> 
    </> );
}

export default LimitOrderSell;