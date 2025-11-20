import UserContext from "./UserContext";
import { useContext, useState } from "react";
import { initialUserState } from "../DummyData";
function UserState({children}) {
    let [user, setUser] = useState(initialUserState);

    let editUserInfo= (userData)=>{
        // console.log(userData)
        setUser(prev=>{
            return {...prev, name:userData.name, username:userData.username, email:userData.email, funds:{...prev.funds,availableCash:userData.funds.availableCash} }
        })
    }
    let addFunds=(newavailableCash)=>{
        setUser(prev=>{
            let finalfunds = Number(prev.funds.availableCash) + Number(newavailableCash)
            return {...prev, funds:{...prev.funds, availableCash: finalfunds.toFixed(2)}}
        })
    }
    return ( <>
    
    {console.log(user)}
    <UserContext.Provider value={{user, setUser, editUserInfo, addFunds}}>
        {children}
    </UserContext.Provider>
    </> );
}

export default UserState;