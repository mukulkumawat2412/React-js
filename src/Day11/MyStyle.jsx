import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

function MyStyle() {


   const MyDiv =  styled(Box)({
        // backgroundColor:"blue",
        // color:"white",
        // textAlign:"center"

    })

    let Div2 = styled(Box)({

        color:"white",
       textAlign:"center",
       backgroundColor:"black",
       width:"500px",
       height:"300px",
       margin:"auto",
       padding:"20px"
    

    })


    let Div3 = styled(Box)({

        backgroundColor:"blue",
        color:"white",
        width:"350px",
        margin:"auto",
        padding:"5px",
        borderRadius:"5px",
        cursor:"pointer"
        
    })





    return ( 
        <>
        <MyDiv>
        <Typography variant="h1"></Typography>
        <Div2 >
         <label>FirstName</label>   
        <input type="text" placeholder="Email Address" style={{padding:"10px"}}></input><br></br><br></br>
        <label htmlFor="">Password</label>
        <input type="password" placeholder="password" style={{padding:"10px"}} /><br></br><br></br>
        <input type="checkbox" style={{marginRight:"10px",cursor:"pointer"}}  />
        <label htmlFor="">Remember me</label>
       
        <Div3  >SIGN IN</Div3>
        </Div2>

        </MyDiv>
        
        </>
     );
}

export default MyStyle;