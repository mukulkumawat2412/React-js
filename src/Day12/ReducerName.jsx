import { useReducer } from "react";

function ReducerName() {


    let initialName = "Mukul"


    function reducer(currentName,action){
        switch(action){
            case "update":
               return currentName="Devanshu"

               default:
               return currentName
        }

    }




   const[Name,dispatchName]=useReducer(reducer,initialName)



    return ( 
        <>
        

            <h1>{Name}</h1>
            <button onClick={()=>{dispatchName("update")}}>update Name</button>
        
        
        
        </>
     );
}

export default ReducerName;