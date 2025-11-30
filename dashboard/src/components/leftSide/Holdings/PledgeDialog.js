import { useState } from "react";
import UserContext from "../../../contexts/UserContext/UserContext";
function Pledge({pledgeAmt, setPledgeAmt}) {
  let [ischecked, setChecked]= useState(false);
  let onChangeHandler = (event)=>{
    setChecked(!ischecked);
  }

    return ( <>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Pledge Stock</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="form-check form-switch">
            <input class="form-check-input" onChange={onChangeHandler} type="checkbox" checked={ischecked} role="switch" id="switchCheckChecked" />
            <label class="form-check-label" for="switchCheckChecked">Confirm Pledge</label>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" >Save changes</button>
      </div>
    </div>
  </div>
</div>
    
    
    </> );
}

export default Pledge;