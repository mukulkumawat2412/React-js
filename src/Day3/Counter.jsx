import { useState } from "react";
import "../Day3/counter.css"

function Counter() {


    const[count,setCount]=useState(0)

    function Inc(){

        setCount(count+1)

    }


    function Dec(){
        setCount(count-1)

    }


    return ( 
    <>
    <div className="Counter">
    <h1>Counter App</h1>
    {/* <p>{count==10 ? "yahoo you get the goal":<></>}</p> */}
   

    {count<11 ? <button  onClick={Inc}>+</button>:<></>}                  
     {count>10 ?<button disabled  onClick={Inc}>+</button>:<></>}


    <h2>{count}</h2>
    <button onClick={Dec}>-</button>
    </div>
 
    
    </> 
    );
}

export default Counter;