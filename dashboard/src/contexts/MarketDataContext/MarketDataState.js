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
                    quantity: 0,
                    avgPrice: null,
                    categories: ["watchlist"],
                    dayChange: targetStock.dayChange,
                    dayChangePercent: targetStock.dayChangePercent,
                    pnl: null
                }
            ];
        }) 
    }
    console.log("marketdata:"+marketData);
    return ( <MarketContext.Provider value={{marketData, setMarketData, addToWatchList}}>
        {children}
    </MarketContext.Provider> );
}

export default MarketDataState;