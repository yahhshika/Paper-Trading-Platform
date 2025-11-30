import UserContext from "./UserContext";
import { useContext, useState } from "react";
import { initialUserState } from "../DummyData";
function UserState({children}) {
    let [user, setUser] = useState(initialUserState);

    let editUserInfo= (userData)=>{
        // console.log(userData)
        setUser(prev=>{
            console.log("editing user info")
            console.log("edit user prev: ", prev)
            return {...prev, name:userData.name, username:userData.username, email:userData.email }
        })
    }
    let addFunds=(addOnCash)=>{
        console.log("addOnCash:", addOnCash)
        setUser(prev=>{
            console.log("add funds prev: ", prev)
            let finalfunds = Number(prev.funds.availableCash) + Number(addOnCash)
            console.log("finalfunds:" + finalfunds)
            return {...prev, funds:{...prev.funds, availableCash: finalfunds}}
        })
    }
    let removeFunds=(removeCash)=>{
        setUser(prev=>{
            console.log("remove funds prev: ", prev)

            let finalfunds = Number(prev.funds.availableCash) - Number(removeCash)
            return {...prev, funds:{...prev.funds, availableCash: finalfunds}}
        })
    }

    return ( <>
     
    {console.log(user)}
    <UserContext.Provider value={{user, setUser, editUserInfo, addFunds, removeFunds}}>
        {children}
    </UserContext.Provider>
    </> );
}

export default UserState;