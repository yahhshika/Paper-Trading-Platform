import { useState, useContext } from "react";
import MarketContext from "./MarketDataContext";
import { dummyMarketData } from "../DummyData";
import AllStockContext from "../AllStocksContext/AllStocksContext";

// handles watchlist, holdings, positions
function MarketDataState({children}) {
    let {allStocks} = useContext(AllStockContext);
    let [marketData, setMarketData] = useState(dummyMarketData);

    let addToWatchList = (identifierRaw)=>{
        if(!identifierRaw){
            return;
        } 
        const identifier = identifierRaw.toString().trim().toUpperCase();
        let targetStock = allStocks.find(stock=>(stock.symbol && stock.symbol.toUpperCase() === identifier) ||
            (stock.company && stock.company.toUpperCase() === identifier));
        if (!targetStock) {
            console.warn("Stock not found for:", identifierRaw);
            return;
        }

        // two cases: either already a part of the watchlist or not a part of the watchlist
        // case1:
        setMarketData(prev=>{
            // it exists and is a part of the watchlist:
            const already = prev.find(stock=>stock.symbol===targetStock.symbol && Array.isArray(stock.categories) && stock.categories.includes("watchlist"));
            if(already){
                return prev;
            }

            // exists but watchlist not in categories 
            const targetIndex = prev.findIndex(s=>s.symbol===targetStock.symbol);

            if(targetIndex !== -1){
                const newArr = [...prev];
                const existing = { ...newArr[targetIndex] };
                existing.categories = Array.isArray(existing.categories) ? Array.from(new Set([...existing.categories, "watchlist"])) : ["watchlist"];
                newArr[targetIndex] = existing;
                return newArr;
            }

            // the stock never existed, creating a new one.
            return [
                ...prev,
                {
                    symbol: targetStock.symbol,
                    company: targetStock.company,
                    ltp: targetStock.ltp,
                    qty: 0,
                    avgPrice: null,
                    categories: ["watchlist"],
                    dayChange: targetStock.dayChange,
                    dayChangePercent: targetStock.dayChangePercent,
                    pnl: null
                }
            ];
        }) 
    }

    let addToPositions= (orderData)=>{
        console.log(orderData)
        let symbol = orderData.symbol;
        let targetOrder = marketData.find(stock=>stock.symbol===symbol);
        // this order is already in marketData
        if(targetOrder){
            // this order is already in positions
            let already = Array.isArray(targetOrder.categories) && targetOrder.categories.includes("position");
            if(already){
        
                setMarketData(prev=>{
                    let index = prev.findIndex(order=>order.symbol===orderData.symbol);
                    let newArr = [...prev];
                    let newAvgPrice = ((Number(targetOrder.avgPrice)*Number(targetOrder.qty)) +( Number(orderData.avgPrice) * Number(orderData.qty)))/(Number(orderData.qty) + Number(targetOrder.qty));
                    let target = {...newArr[index]};
                    target.avgPrice = newAvgPrice;
                    target.qty = Number(orderData.qty)+ Number(target.qty);
                    newArr[index] = target;
                    return newArr;

                })
                return;
                
                

            } else{
                setMarketData(prev=>{
                    let index = prev.findIndex(order=>order.symbol===orderData.symbol);
                    let newArr = [...prev];
                    let target = {...newArr[index]};
                    target.categories = Array.isArray(target.categories) ? Array.from(new Set([...target.categories, "position"])) : ["position"];
                    target.qty = orderData.qty;
                    target.avgPrice = orderData.avgPrice;
                    newArr[index] = target;

                    return newArr;

                })
                return;
            }   
        }
        setMarketData(prev=>{
                return [
                ...prev,
                {
                    symbol:orderData.symbol,
                    company:orderData.company,
                    ltp: orderData.ltp,
                    qty: orderData.qty,
                    avgPrice: orderData.avgPrice,
                    categories: ["position"],
                    dayChange: orderData.dayChange,
                    dayChangePercent: orderData.dayChangePercent,
                    pnl: null,
                }
            ];
        })
   
    }
    let removewatchlist = (symbol)=>{
        let target = marketData.find(stock=>stock.symbol===symbol);
        if(!target){
            console.warn("no such symbol in data");
            return;
        }
        let isUnderWatchList = Array.isArray(target.categories) && target.categories.includes("watchlist")
        if(isUnderWatchList){
            
            setMarketData(prev=>{
                let targetStock = prev.find(stock=>stock.symbol===symbol);
                let targetIndex = prev.findIndex(stock=>stock.symbol===symbol);
                targetStock["categories"] = targetStock.categories.filter(section=>section != "watchlist");
                let newData = [...prev]
                newData[targetIndex] = targetStock;

                return newData;


            })
            return;
        
        }
    }

    let removeFromPosition = (orderData)=>{
        console.log("inside remove positions",orderData);
        let target = marketData.find(stock=>stock.symbol === orderData.symbol);
        if(!target){
            console.warn("target not found");
            return;
        }else{
            // let leftovers = Number(target.qty) - Number(orderData.qty);
            console.log("targetFOund:", target)
            setMarketData(prev=>{
                let targetSt ={... prev.find(st=>st.symbol===orderData.symbol)};
                
                let leftOverQty = Number(targetSt.qty) - Number(orderData.qty);
                if(leftOverQty===0){
                    targetSt["categories"] = Array.isArray(targetSt.categories)? targetSt.categories.filter(section=>section !== "position"):[];
                    let newData = [...prev];
                    let tarInd = prev.findIndex(st=>st.symbol===targetSt.symbol);
                    newData[tarInd] = targetSt;
                    return newData;
                }else{
                
                    let newData = [...prev];
                    targetSt.qty =leftOverQty;
                    let targetIndex = prev.findIndex(st=>st.symbol===targetSt.symbol);
                    newData[targetIndex] = targetSt;
                    return newData;
                }
            })
            
     
        }
    } 
    let removeFromHolding = (orderData)=>{
        console.log("inside remove holding",orderData);
        let target = marketData.find(stock=>stock.symbol === orderData.symbol);
        if(!target){
            console.warn("target not found");
            return;
        }else{
            // let leftovers = Number(target.qty) - Number(orderData.qty);
            console.log("targetFOund:", target)
            setMarketData(prev=>{
                let targetSt ={... prev.find(st=>st.symbol===orderData.symbol)};
                
                let leftOverQty = Number(targetSt.qty) - Number(orderData.qty);
                if(leftOverQty===0){
                    targetSt["categories"] = Array.isArray(targetSt.categories)? targetSt.categories.filter(section=>section !== "holding"):[];
                    let newData = [...prev];
                    let tarInd = prev.findIndex(st=>st.symbol===targetSt.symbol);
                    newData[tarInd] = targetSt;
                    return newData;
                }else{
                
                    let newData = [...prev];
                    targetSt.qty =leftOverQty;
                    let targetIndex = prev.findIndex(st=>st.symbol===targetSt.symbol);
                    newData[targetIndex] = targetSt;
                    return newData;
                }
            })
            
     
        }
    } 




    // console.log("marketdata:"+marketData);
    return ( <MarketContext.Provider value={{marketData,removewatchlist, setMarketData, addToWatchList, addToPositions , removeFromPosition, removeFromHolding}}>
        {children}
    </MarketContext.Provider> );
}

export default MarketDataState;