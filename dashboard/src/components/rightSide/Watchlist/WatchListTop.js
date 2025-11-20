import { useContext, useState } from "react";
import MarketContext from "../../../contexts/MarketDataContext/MarketDataContext";
function WatchListTop() {
  let {addToWatchList}= useContext(MarketContext);
  let[currSearch, setCurrSearch] = useState("");
  let onChangeHandler = (event)=>{
    setCurrSearch(event.target.value);
  }
  let onSubmitHandler = (event)=>{
    event.preventDefault();
    addToWatchList(currSearch);
    setCurrSearch("");

  }
    return ( <nav class="navbar">
  <div class="container-fluid">
    <span class="navbar-brand"  style={{color:"#939393ff", fontSize:"100%"}}>9/15</span>
    <form class="d-flex ms-auto" onSubmit={onSubmitHandler} role="search">
      <input class="form-control me-2" type="search" value={currSearch} onChange={onChangeHandler} placeholder="Search Eg. INFY"/>
      <button class="btn btn-outline-success" type="submit">Add</button>
    </form> 
    {/* <div class="spinner-border text-secondary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div> */}
  </div>
</nav>
 );
}

export default WatchListTop;