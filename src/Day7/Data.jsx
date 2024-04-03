import { useEffect, useState } from "react"

function Data() {

    const[count,setCount]=useState(0)
    const[title,setTitle]=useState("")
    const[img,setImg]=useState("")
    const[desc,setDesc]=useState("")
    const[value,setValue]=useState("Manny")





    async function myData(){

    let result =  await fetch(`https://dummyjson.com/products/${count}`)
     let data =   await result.json()
     setTitle(data.title)
    //  setImg(data.images[1])
     setDesc(data.description)


    }

    useEffect(()=>{


     myData()

    },[count])



    function handleData(){

        setCount(count+1)

    }



    function handleUpdate(){

        setValue("Kizie")
    }


  
    return ( 
        <>

<div className="card">
  <img src={img} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"></h5>
    <p className="card-text">{desc}</p>
    <button onClick={handleData}>Next</button>
  </div>
</div>




















  
        <h1>{count}</h1>
     
        <h1>{value}</h1>
        <button  onClick={handleUpdate}>update</button>
        
        </>
     );
}

export default Data;