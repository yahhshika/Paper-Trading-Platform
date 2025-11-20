import LeftSide from "./leftSide/LeftSide";
import RightSide from "./rightSide/RightSide";
import "../util.css";
import UserState from "../contexts/UserContext/UserState";
import MarketDataState from "../contexts/MarketDataContext/MarketDataState";
import AllStockState from "../contexts/AllStocksContext/AllStocksState";
import OrdersState from "../contexts/OrdersContext/OrdersState";
function Home() {
    return ( <div className="row m-0">
        <AllStockState>

            <div className="col-lg-7 p-0">
                <OrdersState>

                    <UserState>
                        <MarketDataState>
                            <LeftSide></LeftSide>
                        </MarketDataState>
                    </UserState>
                </OrdersState>
            </div>
            <div className="col-lg-5 p-0">
                <MarketDataState>
                    <RightSide></RightSide>
                </MarketDataState>
                
            </div>

        </AllStockState>
    </div> );
}

export default Home;
