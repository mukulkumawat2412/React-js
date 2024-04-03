function Example1() {

    let myData = ["Aman","Abhay","Abhinav","Devanshu","Sagar"]


    return ( 
        <>

    {myData.map((value,index)=>(

        <ul>
        <li> Value:- {value} Index:- {index}</li>
        </ul>   

    ))}
        
      
        
        
        
        </>
     );
}

export default Example1;