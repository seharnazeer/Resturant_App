import React from "react";
import {Box,styled,Typography,IconButton,Button} from "@mui/material";
import {useNavigate} from "react-router-dom"
export const Main=()=>{
   const navigate=useNavigate();
    const Boxstyle=styled(Box)({
        display:"flex",
        flexDirection:'column',
        justifyContent:'center',
        backgroundImage:'url("./Resturant_App/Pictures/main.png")',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        width:'100vw',
        height:'85vh',
        alignItems:"center",
        
    })
    const Typographystyle=styled(Typography)(({theme})=>({
width:'18rem',
        alignSelf:"flex-end",
        [theme.breakpoints.up('sm')]:{
            width:'25rem'
        }
    }))
    return(
        <>
        {/* <Navbar /> */}
        <Boxstyle>
            <Box component='div' sx={{alignSelf:'flex-end',marginRight:{md:'10%',lg:'10%',sm:'2%',xs:'1%',xl:'10%'}}}>
            <Typographystyle  variant="h3">Welcome to Sam Resturant</Typographystyle>
            <Typographystyle variant="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque esse veritatis dolores!</Typographystyle>
            <Button sx={{border:'1px solid black'}} variant="contained" color="primary" onClick={()=>navigate('/menu')}><Typography>Order Now</Typography></Button>
            </Box>
           
        </Boxstyle>

        </>

    )
}