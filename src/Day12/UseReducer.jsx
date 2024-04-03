import { useReducer } from "react";

function UserReducer() {


    let initialvalue = 0

    function reducer(currentvalue,action){
        switch(action){
            case "inc":
               return currentvalue+1
               
               case "dec":
                return currentvalue-1
        }


    }


   const[state,dispatch]=useReducer(reducer,initialvalue)





    return (
        <>

            <button onClick={()=>{dispatch("inc")}}>+</button>
            <h1>{state}</h1>
            <button onClick={()=>{dispatch("dec")}}>-</button>
        
        
        </>
      );
}

export default UserReducer;