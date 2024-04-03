import { useMemo, useState } from "react"

function Usememo(){

    const[count,setCount]=useState(0)
    const[name,setName]=useState("Manny")

  


    const deviderFun = useMemo(

        function devide(){
            console.log("im a devide function")
           return count/2
        },[count]
        


    )
    




    return(
        <>

        {deviderFun}
        <br></br>
            <button onClick={()=>setCount(count+1)}>Increment</button> 
            <h1>{count}</h1>
            <button onClick={()=>setCount(count-1)}>decrement</button>


            <h1>{name}</h1>
            <button onClick={()=>setName("Devanshu")}>updateName</button>

        </>
    )

}


export default Usememo

