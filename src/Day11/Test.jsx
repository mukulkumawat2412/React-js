import { Avatar, BottomNavigation, BottomNavigationAction, Pagination, Tab, Tabs } from "@mui/material";
import myImage from "../card/media/Snapchat.jpg"
import PhoneIcon from "@mui/icons-material/Phone"
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed"
import FavoriteIcon from "@mui/icons-material/Favorite"


function Test() {
    return ( 
        <>
        
        <Avatar src={myImage}
            sx={{
                width:"100px",
                height:"100px",
                margin:"auto",
                
            }}

        
        />
        
        <Pagination  count={10} color="warning" sx={{
            backgroundColor:"red",
            color:"white",
            margin:"auto"
        }}/>

        <Tabs>
           <Tab icon={<PhoneIcon color="primary"/> }/> 
           <Tab icon={<PhoneMissedIcon color="error"/>}/>
           <Tab icon={<FavoriteIcon color="secondary"/>}/>
        </Tabs>






        
        </>
     );
}

export default Test;