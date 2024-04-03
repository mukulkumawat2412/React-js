import { useState } from "react";

function Test() {

  


    let x =11

    const[num,setNum]=useState(x)

   const[name,setName]=useState("Devanshu")




    function handleClick(){

       setNum(x=50)

    }


    function handleName(){

      setName("Manny")

    }





    return (
        <>
        <h1>test</h1>
        <h2>value:- {num}</h2>
        <button onClick={handleClick}>Click to change Value</button>

        <h3>Name:- {name}</h3>
        <button onClick={handleName}>Change Name</button>
        
        </>
      );
}

export default Test;