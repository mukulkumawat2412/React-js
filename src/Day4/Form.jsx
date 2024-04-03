import { useState } from "react";

function Form() {

   const[fname,setFname]=useState("")
   const[lname,setLname]=useState("")
    const[fvalue,setFvalue]=useState("")
    const[lvalue,setLvalue]=useState("")

  










    function handleForm(e){
        e.preventDefault()
 
      
        setFvalue(fname)
        setLvalue(lname)
       setFname("")
        setLname("")
        
     
    }






    return ( 
        <>

        <form action="" onSubmit={handleForm}>
            <h1>Hello:- {fvalue} {lvalue}</h1>
        <label>FirstName</label>
        <input type="text" value={fname} onChange={(e)=>setFname(e.target.value)} />
        <label>LastName</label>
        <input type="text" value={lname} onChange={(e)=>setLname(e.target.value)}/>
        <button>Submit</button>


        </form>

        </>
     );
}

export default Form;