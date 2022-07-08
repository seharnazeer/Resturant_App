import React from "react"
import { createTheme } from "@mui/material"
export const Darktheme=createTheme({
    palette:{
        primary:{
          main:"#000000"
        },
        secondary:{
          main:"#FFFFFF"
        },
        info:{
            main:'#FFFFFF'
        },
        mode:'dark'
      },
      typography:{
        allVariants:{
          color:"#FFFFFF",
          fontFamily:'Charis SIL,serif',
        },
        p:{
          color:"#FFFFFF",
        }
  
      },

})