import { Fab, FormControl, FormControlLabel, Radio, Rating } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation';
import StyledRating from "@mui/icons-material"


function TestMui() {
    return (
        <>
        <Fab sx={{
            backgroundColor:"black",
            color:"white"
        }}>
        <AddIcon sx={{
            backgroundColor:"brown"
        }}>

        </AddIcon>
        </Fab>

        <Fab variant="extended" color="secondary">
            <NavigationIcon>Navigate</NavigationIcon>
        </Fab>

        <FormControl>
            <FormControlLabel control={<Radio color="error"/>} label="Select"/>
        </FormControl>

        <Rating sx={{
            fontSize:"100px",
            color:"red"
        }}
            name="simple-controlled"
           
        >
            
        </Rating>







        
        </>
      );
}

export default TestMui;