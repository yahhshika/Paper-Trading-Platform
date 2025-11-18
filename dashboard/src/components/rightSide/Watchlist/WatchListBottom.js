import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import "./WatchListBottom.css";
import { watchlist } from '../../../data/data';
import BuySellModels from "../BuyModes/BuySellModals"
import { useState } from 'react';
import {LineChart} from "../../graphs/LineChart"

import HoverEffectHandler from './HoverEffectHandler';
function WatchListBottom() {
    let [mouseEnter, setMouseEnter] = useState(null);
    let handleMouseEnter = (index)=>{
        setMouseEnter(index);
    }
    let handleMouseLeave = ()=>{
        setMouseEnter(null);
    }

    const labels = watchlist.map((stock)=>stock["name"]);

    const data = {
    labels,
    datasets: [
        {
        label: 'Price',
        data: watchlist.map(stock=>stock["price"]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
  
    ],
    };


    return (<>
    
    {watchlist.map((stock, index)=>{
        const stockClass = stock.isDown? "color-red":"color-green";
        return (<>
        <div key={index} className="row watchlistbottomrow m-0 p-2 border-bottom" onMouseEnter={()=>{handleMouseEnter(index)}} onMouseLeave={()=>{handleMouseLeave(index)}}>
            <div className={`font-100 col-4 p-0 ${stockClass}`}>{stock.name}</div>
            <div className="col-8 p-0 text-end pe-1">
                <span className={`font-100 ${stockClass}`}>{stock.percent}</span>
                <span className={`font-100 px-2 ${stockClass}`}>{stock.isDown?<ExpandMoreIcon></ExpandMoreIcon>:<ExpandLessIcon></ExpandLessIcon>}</span>
                <span className='font-100'>{stock.price}</span>
            </div>
            <div className='hover-buttons'>

            {mouseEnter===index && <HoverEffectHandler id={index}></HoverEffectHandler>}
            </div>


        </div>

        

        </>)
    })}

    <BuySellModels></BuySellModels>
    <div className='container mt-5'>
        <LineChart data={data} title={"Stock vs Price"}></LineChart>
    </div>
    

    
    


    </>)
}

export default WatchListBottom;

