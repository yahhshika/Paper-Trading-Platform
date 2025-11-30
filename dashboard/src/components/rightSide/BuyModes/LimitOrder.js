
function LimitOrder({stockToBuy, handleOrderInputChange, inputs}) {
    return ( 
    <div class="row">
        <p className="font-200">{(stockToBuy&&stockToBuy.symbol) || ""}</p>
        <div class="col">
            <input type="number" class="form-control" min={1} placeholder="Qty." required aria-label="First name" name="qty" value={inputs.qty} onChange={handleOrderInputChange}/>
        </div>
        <div class="col">
            <input type="number" class="form-control" placeholder="price" aria-label="1234.5" onChange={handleOrderInputChange} name="price" value={inputs.price}/>
        </div>

    </div> );
}

export default LimitOrder;