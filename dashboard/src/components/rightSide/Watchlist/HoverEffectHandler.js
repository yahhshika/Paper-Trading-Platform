import EqualizerIcon from '@mui/icons-material/Equalizer';
import {Tooltip, Grow} from "@mui/material";

function HoverEffectHandler({id}){

    return(<>
    <span className='p-0'>
        <Tooltip placement='top' arrow TransitionComponent={Grow}>
            <div class="btn-group btn-group-sm p-0" role="group" aria-label="Small button group">
                <button type="button" className="btn btn-secondary px-2 py-0"  data-bs-toggle="modal" data-bs-target="#exampleModal1">Buy</button>
                <button type="button" className="btn btn-danger px-2 ms-2 py-0" data-bs-toggle="modal" data-bs-target="#exampleModal2">Sell</button>
                <button type="button" className="btn btn-outline-primary px-2 ms-2 py-0"><EqualizerIcon></EqualizerIcon></button>
            </div>
        </Tooltip>
        
    </span>
    
    
    </>)
}
export default HoverEffectHandler;