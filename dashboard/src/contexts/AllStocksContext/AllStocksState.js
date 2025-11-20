import { useContext, useState } from "react";
import AllStockContext from "./AllStocksContext";
import { allStocksData } from "../DummyData";
function AllStockState({children}) {
    let[allStocks, setAllStocksData] = useState(allStocksData);
    return (<AllStockContext.Provider value={{allStocks, setAllStocksData}}>
        {children}
    </AllStockContext.Provider>  );
}

export default AllStockState;