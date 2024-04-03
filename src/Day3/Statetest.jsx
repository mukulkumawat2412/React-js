import { useState } from "react";

function Statetest() {


        let myObj = {fistName:"Devanshu",lastName:"kumawat"}

       const[value,setValue]=useState(myObj)



    function updateName(){

        setValue({...value,fistName:"kizie",lastName:"Sharma"})

        
    }



    return ( 

        <>
        <h1>firstName:- {value.fistName}  lastName:-{value.lastName} </h1>
        <button onClick={updateName}>Update Value</button>
        
        </>
     );
}

export default Statetest;