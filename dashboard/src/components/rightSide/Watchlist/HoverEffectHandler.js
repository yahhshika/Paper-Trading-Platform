import EqualizerIcon from '@mui/icons-material/Equalizer';
import {Tooltip, Grow} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MarketContext from '../../../contexts/MarketDataContext/MarketDataContext';
import { useContext } from 'react';
function HoverEffectHandler({ownStock,setStockToBuy}){
    let {removewatchlist} = useContext(MarketContext);
    let buyClickHandler = ()=>{
        setStockToBuy(ownStock);
    }

    let onDeleteHandler = ()=>{
        removewatchlist(ownStock.symbol);
    }
    return(<>
    <span className='p-0'>
        <Tooltip placement='top' arrow TransitionComponent={Grow}>
            <div class="btn-group btn-group-sm p-0" role="group" aria-label="Small button group">
                <button type="button" className="btn btn-secondary px-2 py-0"  data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={buyClickHandler}><ShoppingCartIcon></ShoppingCartIcon></button>
                <button type="button" className="btn btn-danger px-2 ms-2 py-0" onClick={onDeleteHandler}><DeleteIcon></DeleteIcon></button>
                <button type="button" className="btn btn-outline-primary px-2 ms-2 py-0"><EqualizerIcon></EqualizerIcon></button>
            </div>
        </Tooltip>
        
    </span>
    
    
    </>)
}
export default HoverEffectHandler;