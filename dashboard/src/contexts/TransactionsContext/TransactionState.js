import TransactionContext from "./TransactionContext";
import { dummyTransactions } from "../DummyData";
import { useState } from "react";
function TransactionState({children}) {
    let [transactions, setTransactions] = useState(dummyTransactions)

    let addNewTransaction = (transaction)=>{
        setTransactions(prev=>{
            return [transaction,...prev];
        })
    }

    return ( <TransactionContext.Provider value={{transactions, addNewTransaction}}>{children}</TransactionContext.Provider> );
}

export default TransactionState;