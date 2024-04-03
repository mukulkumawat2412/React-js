import { Box, ButtonGroup, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import Button from "@mui/material/Button"
import AbcIcon from '@mui/icons-material/Abc';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import DownloadIcon from '@mui/icons-material/Download';
import AssistantPhotoRoundedIcon from '@mui/icons-material/AssistantPhotoRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Form } from "react-router-dom";
import { FormControl } from "@mui/base";



function MuiButton() {

    return ( 

       <>
        <Button variant="contained" color="success">Mukul</Button>
        <ButtonGroup variant="contained" orientation="vertical">
            <Button color="info">One</Button>
            <Button color="warning">Two</Button>
            <Button color="error">Three</Button>
            <Button color="success">Four</Button>
        </ButtonGroup>

        <Typography variant="h1">My webpage</Typography>
        <Box sx={{
            color:"red",
            fontSize:"30px"
        }}>Jay Shree Shyam</Box>
    
        <AbcIcon sx={{
            fontSize:"100px"
        }}></AbcIcon>

        <WhatsAppIcon sx={{
            color:"green",
            fontSize:"100px"
        }}></WhatsAppIcon>


        <FacebookIcon sx={{
            color:"blue",
            fontSize:"100px"
        }}></FacebookIcon>

        <InstagramIcon sx={{
            color:"pink",
            fontSize:"100px",
           

        }}></InstagramIcon>

        <PowerSettingsNewOutlinedIcon sx={{
            color:"red",
            fontSize:"100px"
        }}></PowerSettingsNewOutlinedIcon>

        <DownloadIcon sx={{
            color:"black",
            fontSize:"100px"
        }}></DownloadIcon>

        <AssistantPhotoRoundedIcon sx={{
            color:"red",
            fontSize:"100px"
        }}></AssistantPhotoRoundedIcon>

        <YouTubeIcon sx={{
            color:"red",
            fontSize:"100px"
        }}></YouTubeIcon>


        {/* <FormGroup>
            <FormControlLabel control={Checkbox} label="React">

            </FormControlLabel>
        </FormGroup> */}


        </>


     );

}

export default MuiButton;