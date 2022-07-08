import React from "react";
import {Box,Typography} from "@mui/material";
export const About=()=>{
    return(
        <>
        <Box sx={{height:'85vh',width:'100vw',backgroundColor:'background.default'}}>
        <Box component='img' src="./Resturant_App/Pictures/about.jpg" sx={{width:'100vw',height:'60vh',objectFit:'cover'}}></Box>
        <Box sx={{width:'60vw',margin:'auto',marginTop:'2rem'}}>
        <Typography variant="h4" sx={{textAlign:'center'}}>We focused on the quality</Typography>
        <Typography variant="p" sx={{textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
        </Box>
        </Box>
        </>
    )
}