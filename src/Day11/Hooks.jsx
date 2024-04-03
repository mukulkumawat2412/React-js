import { useReducer, useState } from "react";

function UseReducer() {

  const[value,setValue]=useState("")


 let initialstate = "devanshu"

  const[state,dispatch]=useReducer(reducer,initialstate)



    function reducer(currentName,action){
      switch(action){
        case "add":
          return currentName = "Manny"

      }


    }



  function handleSubmit(e){
    e.preventDefault()

  }


  return ( 
    <>

        <form action="" onSubmit={handleSubmit}>
          <h1>{state}</h1>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}  />
        <button onClick={()=>{dispatch("add")}}>update</button>

        </form>

    
    </>
   );
}

export default UseReducer;