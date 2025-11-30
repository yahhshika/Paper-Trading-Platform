import { holdings } from "../../../data/data";
import {DoughnutChart} from  "../../graphs/Doughnut"
import "./Holdings.css";
import Pledge from "./PledgeDialog";
import MarketContext from "../../../contexts/MarketDataContext/MarketDataContext";
import { useContext, useState } from "react";

import Outerbox from "../../SellBoxes/OuterBox";
function Holdings() {
    let [pledgeAmt, setPledgeAmt]= useState(0);
    let {marketData} = useContext(MarketContext);
    let holdings = marketData.filter(data=>data.categories.includes("holding"));
    let totalInvestment = marketData.filter(data=>data.categories.includes("holding")).reduce((sum, curr)=>{
        return Number(curr.avgPrice)*Number(curr.qty) + sum;
    },0) 
    let currValue = marketData.filter(data=>data.categories.includes("holding")).reduce((sum, curr)=>{
        return Number(curr.ltp)*Number(curr.qty) + sum;
    },0)
    let totalPnl = marketData.filter(data=>data.categories.includes("holding")).reduce((sum, curr)=>{
        return ((Number(curr.ltp) * Number(curr.qty))- (Number(curr.avgPrice)*Number(curr.qty))) + sum;
    },0)
    let totalProfitPercent = (totalPnl/currValue) * 100;


    let [currOrderToSell, setCurrOrderToSell] = useState(null);
    let onClickCurrOrderToSellHandler = (order)=>{
        setCurrOrderToSell(order)
    }
    // console.log(holdings)
    const data = {
      labels: holdings.map(holding=>holding["symbol"]),
      datasets: [
        {
          label: 'ltp',
          data:holdings.map(holding=>holding["ltp"]),
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    
    return (

    <div className="container" style={{paddingTop:"5%"}}>
        <h2 style={{fontWeight:"100"}} className="mb-3">Holdings({holdings.length})</h2>
        <div className="container" style={{padding:"5rem", paddingTop:"2rem"}}>

        <DoughnutChart data={data}></DoughnutChart>
        </div>
  
        <div className="table-responsive-sm hide-x" style={{marginBottom:"3%"}}>

            <table class="table ">
                <thead>
                    <tr>
                        <th scope="col"><h6 className="font-200"> Inst.</h6></th>
                        <th scope="col"><h6 className="font-200"> Qty</h6></th>
                        <th scope="col"><h6 className="font-200"> Avg.</h6></th>
                        <th scope="col"><h6 className="font-200"> LTP</h6> </th>
                        <th scope="col"><h6 className="font-200"> Cur</h6></th>
                        <th scope="col"><h6 className="font-200"> P&L</h6></th>
                        <th scope="col"><h6 className="font-200"> Net chg.</h6></th>
                        <th scope="col"><h6 className="font-200"> Day chg.</h6></th>
                    </tr>
                </thead>
                <tbody>
    
                    {holdings.map((stock, index)=>{
                        const currVal = stock.ltp * stock.qty; //the amount you hold
                        const profit =  currVal - stock.avgPrice*stock.qty;
                        const isProfit = profit >=0.0 ;
                        const profClass = isProfit?"color-green":"color-red";
                        // const dayLoss = stock.isLoss?"color-red":"color-green";
                        // console.log(stock)
                        return(
                            <tr className="cursor-pointer" key={index} onClick={()=>{onClickCurrOrderToSellHandler(stock)}} data-bs-toggle="modal" data-bs-target="#sellOrders" >
                                <td className="holding"><span className="font-100">  {stock.symbol} </span></td>
                                <td className="holding"><span className="font-100">  {stock.qty} </span></td>
                                <td className="holding"><span className="font-100">  {stock.avgPrice.toFixed(2)} </span></td>
                                <td className="holding"><span className="font-100">  {stock.ltp.toFixed(2)} </span></td>
                                <td className="holding"><span className="font-100">  {currVal.toFixed(2)} </span></td>
                                <td className="holding"><span className={`font-100 ${profClass}`}  >  {profit.toFixed(2)} </span></td>
                                {/* <td className="holding"><span className={`font-100 ${profClass}`}>  {stock.net} </span></td>
                                <td className="holding"><span className={`font-100 ${dayLoss}`}>  {stock.day}</span></td>
                         */}
                            </tr>

                        )
                    })}
           

              
                </tbody>
            </table>
            <Pledge pledgeAmt={pledgeAmt} setPledgeAmt={setPledgeAmt}></Pledge>
        </div>
        <table class="table table-borderless">
            <thead>
                <tr>
                <th scope="col"><h3 style={{display:"inline"}} className="font-200">{totalInvestment && totalInvestment.toFixed(2)}</h3></th>
                <th scope="col"><h3 style={{display:"inline"}} className="font-200">{currValue && currValue.toFixed()} </h3></th>
                <th scope="col"><h3 style={{display:"inline"}} className="font-200 color-green">{totalPnl && totalPnl.toFixed(2)}</h3><span className="font-200 color-green">({totalProfitPercent && totalProfitPercent.toFixed(2)}%)</span></th>
             
                </tr>
            </thead>
            <tbody>

                <tr className="border-none">
                <td className="pt-0 color-xlight">{holdings.length}</td>
                <td className="pt-0 color-xlight">{holdings.length}</td>
                <td></td>
                </tr>

                <tr>
                <td className="color-xxlight">Total Investement</td>
                <td className="color-xxlight">Current Value</td>
                <td className="color-xxlight">P&L</td>
                </tr>
                
            </tbody>
        </table>
        <Outerbox source={"holding"} order={currOrderToSell}></Outerbox>

        
    </div>);
}

export default Holdings;