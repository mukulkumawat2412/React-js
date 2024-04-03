import Card from "./Card";
import Example1 from "./Day2/Example1";
import Myprops from "./Day2/Myprops";
import Product from "./Day2/Product";
import Counter from "./Day3/Counter";
import Statetest from "./Day3/Statetest";
import Test from "./Day3/Test"
import Form from "./Day4/Form";
import Todo from "./Day5/Todo";



import Data from "./Day7/Data";
import Home from "./Day8/Home";
// import Navbar from "./Day8/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom"
// import Navbar from "./Day8/Navbar";
import Card1 from "./card/Card1";
import MuiButton from "./Day9/MuiButton";
import TestMui from "./Day10/TestMui";
import SignInSide from "./Day10/SignInSide";
import DrawerAppBar from "./Day10/DrawerAppBar";
import BasicTable from "./Day11/BasicTable";
import SignUp from "./Day10/SignUp";
import MyStyle from "./Day11/MyStyle";
import Hooks from "./Day11/Hooks";
import UseReducer from "./Day12/UseReducer";
import ReducerName from "./Day12/ReducerName";
import Usememo from "./Day12/Usememo";

import Tailwind from "./Day13/Tailwind";
// import MuiButton from "./Day9/MuiButton";


function App() {

  let ProductData = [{name:"Iphone",price:"$565",rating:"4.9",Id:"43534"},{name:"Samsung",price:"$234",rating:"4.5",Id:"789789"},{name:"Mi laptop",price:"$567",rating:"4.7",Id:"23423"},{name:"Apple",price:"$999",rating:"4.5",Id:"48794"}]



  return ( 
    <>
      {/* <h1>Hello</h1> */}
     {/* <Card name="Mukul kumawat" password="8290" Age="21"/>
     <Card name="Abhishek kumawat" password="8687" Age="27"/> */}
     
     {ProductData.map((value)=>(
      <>
{/* 
      <Product Name={value.name} Price={value.price} Rating={value.rating} myId={value.Id}/>
      <Product Name={value.name} Price={value.price} Rating={value.rating} myId={value.Id}/> */}

      </>
      
     ))}
   
      {/* <Data/> */}
     {/* <Example1/>
     <Myprops name="Mukul kumawat"/>
     <Myprops name="Manny kumawat"/> */}
      {/* <Test/> */}
     {/* <Counter/>*/}
    {/* //  <Statetest/>
    
    //  <Form/> */}
     {/* <Todo/> */}
   
     {/* <UseEffect/> */}
     {/* <UseEffectExample/> */}
     
     {/* <Home/>
    <MuiButton/> */}
       <BrowserRouter>
      <DrawerAppBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/todo" element={<Todo/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/table" element={<BasicTable/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signIn" element={<SignInSide/>}/>
      <Route path="/hooks" element={<Hooks/>}/>
      <Route path="/usememo" element={<Usememo/>}/>
      <Route path="/tailwind" element={<Tailwind/>}/>

     </Routes>
      </BrowserRouter>  

      {/* <UseReducer/>
      <ReducerName/> */}
     
       {/* <MyStyle/> */}
     
{/*       
       <MuiButton/>
      <TestMui/> 
      <Hooks/>  */}

    
       
      

    
    </>
   );
} 

export default App;
