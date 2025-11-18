import { holdings } from "../../../data/data";
import {DoughnutChart} from  "../../graphs/Doughnut"
import "./Holdings.css";
function Holdings() {
    // console.log(holdings)
    const data = {
      labels: holdings.map(holding=>holding["name"]),
      datasets: [
        {
          label: '# of Votes',
          data:holdings.map(holding=>holding["price"]),
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
                        const currVal = stock.price * stock.qty; //the amount you hold
                        const profit =  currVal - stock.avg*stock.qty;
                        const isProfit = currVal - stock.avg*stock.qty >=0.0 ;
                        const profClass = isProfit?"color-green":"color-red";
                        const dayLoss = stock.isLoss?"color-red":"color-green";
                        // console.log(stock)
                        return(
                            <tr  key={index} onClick={()=>{console.log("clicked")}}>
                                <td className="holding"><span className="font-100">  {stock.name} </span></td>
                                <td className="holding"><span className="font-100">  {stock.qty} </span></td>
                                <td className="holding"><span className="font-100">  {stock.avg.toFixed(2)} </span></td>
                                <td className="holding"><span className="font-100">  {stock.price.toFixed(2)} </span></td>
                                <td className="holding"><span className="font-100">  {currVal.toFixed(2)} </span></td>
                                <td className="holding"><span className={`font-100 ${profClass}`}  >  {profit.toFixed(2)} </span></td>
                                <td className="holding"><span className={`font-100 ${profClass}`}>  {stock.net} </span></td>
                                <td className="holding"><span className={`font-100 ${dayLoss}`}>  {stock.day}</span></td>
                        
                            </tr>

                        )
                    })}
           

              
                </tbody>
            </table>
        </div>
        <table class="table table-borderless">
            <thead>
                <tr>
                <th scope="col"><h3 style={{display:"inline"}} className="font-200"> 28,875</h3></th>
                <th scope="col"><h3 style={{display:"inline"}} className="font-200"> 31,475</h3></th>
                <th scope="col"><h3 style={{display:"inline"}} className="font-200 color-green">1553.40</h3><span className="font-200 color-green">(+5.20%)</span></th>
             
                </tr>
            </thead>
            <tbody>

                <tr className="border-none">
                <td className="pt-0 color-xlight">55</td>
                <td className="pt-0 color-xlight">95</td>
                <td></td>
                </tr>

                <tr>
                <td className="color-xxlight">Total Investement</td>
                <td className="color-xxlight">Current Value</td>
                <td className="color-xxlight">P&L</td>
                </tr>
                
            </tbody>
        </table>

        
    </div>);
}

export default Holdings;