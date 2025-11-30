import LeftSide from "./leftSide/LeftSide";
import RightSide from "./rightSide/RightSide";
import "../util.css";
import UserState from "../contexts/UserContext/UserState";
import MarketDataState from "../contexts/MarketDataContext/MarketDataState";
import AllStockState from "../contexts/AllStocksContext/AllStocksState";
import OrdersState from "../contexts/OrdersContext/OrdersState";
import UserAndOrderCombinedStateProvider from "../contexts/CombinedContexts/UserAndOrderCombined/UserAndOrderCombinedProviderState";
import UserAndOrderHandler from "../contexts/CombinedContextHandlers/UserAndOrderHandler";
import TransactionState from "../contexts/TransactionsContext/TransactionState";
function Home() {
    return ( <div className="row m-0">
        <TransactionState>
            <UserState>

                <AllStockState>
                
                    <MarketDataState>
                        <OrdersState>
                            <div className="col-lg-7 p-0">

                                
                                
                                <LeftSide></LeftSide>
                                    
                                
                            </div>
                            <div className="col-lg-5 p-0">
                                <RightSide></RightSide>
                                
                            </div>
                        </OrdersState>
                    </MarketDataState>
                </AllStockState>
            </UserState>
        </TransactionState>
    </div> );
}

export default Home;
