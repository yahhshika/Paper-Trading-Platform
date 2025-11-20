import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import "./WatchListBottom.css";
import { watchlist } from '../../../data/data';
import BuySellModels from "../BuyModes/BuySellModals"
import { useState, useContext } from 'react';
import {LineChart} from "../../graphs/LineChart"
import MarketContext from '../../../contexts/MarketDataContext/MarketDataContext';

import HoverEffectHandler from './HoverEffectHandler';
function WatchListBottom() {
    let {marketData} = useContext(MarketContext);
    let watchLst = marketData.filter(data=>data.categories.includes("watchlist"));
    

    let [stockToBuy, setStockToBuy] = useState(null);


    let [mouseEnter, setMouseEnter] = useState(null);
    let handleMouseEnter = (index)=>{
        setMouseEnter(index);
    }
    let handleMouseLeave = ()=>{
        setMouseEnter(null);
    }

    const labels = watchLst.map((stock)=>stock["symbol"]);

    const data = {
    labels,
    datasets: [
        {
        label: 'Price',
        data: watchLst.map(stock=>stock["ltp"]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
  
    ],
    };


    return (<>
    
    {watchLst.map((stock, index)=>{
        const stockClass = stock.dayChangePercent<0? "color-red":"color-green";
        const isDown = stock.dayChangePercent<0
        return (<>
        <div key={index} className="row watchlistbottomrow m-0 p-2 border-bottom" onMouseEnter={()=>{handleMouseEnter(index)}} onMouseLeave={()=>{handleMouseLeave(index)}}>
            <div className={`font-100 col-4 p-0 ${stockClass}`}>{stock.symbol}</div>
            <div className="col-8 p-0 text-end pe-1">
                <span className={`font-100 ${stockClass}`}>{stock.dayChangePercent}</span>
                <span className={`font-100 px-2 ${stockClass}`}>{isDown?<ExpandMoreIcon></ExpandMoreIcon>:<ExpandLessIcon></ExpandLessIcon>}</span>
                <span className='font-100'>{stock.ltp}</span>
            </div>
            <div className='hover-buttons'>

            {mouseEnter===index && <HoverEffectHandler ownStock={stock} setStockToBuy={setStockToBuy}></HoverEffectHandler>}
            </div>


        </div>

        

        </>)
    })}

    <BuySellModels stockToBuy={stockToBuy}></BuySellModels>
    <div className='container mt-5'>
        <LineChart data={data} title={"Stock vs Price"}></LineChart>
    </div>
    

    
    


    </>)
}

export default WatchListBottom;

