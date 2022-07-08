import React from "react"
import {styled, Card,Stack, CardMedia, CardContent, Typography, CardActions, Button} from "@mui/material";
export const Cartlist=({cartdata,cart,setcart})=>{
    const update=(elem,count)=>{
    const index=cartdata.indexOf(elem);
     cartdata.splice(index,1);
    setcart(cart-count);
    }
    const Cardstyle = styled(Card)(({ theme }) => ({
        width: "450px",
        height: '400px',
        bgColor:'background.default'
    }))
    const Stackstyle = styled(Stack)(({ theme }) => ({
        display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '20px',
        marginTop: '3rem',
        bgColor:'background.default'
    }))
    return(
        <Stackstyle>
            {
                cartdata.map((elem,index)=>{
                    return(<Cardstyle key={index}>
                            <CardMedia component='img' image={elem.src} height='200px'>
                            </CardMedia>
                            <CardContent>
                                <Typography variant='h4'>{elem.name}</Typography>
                                <Typography variant='p' >
                                    {elem.desc}
                                </Typography>
                                <Typography variant='h5'>
                            <strong>Price</strong>:{elem.Price}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant='outlined' color='info' onClick={()=>update(elem,elem.count)}>
                                    Delete
                                </Button>
                                <Button variant='outlined' color='info'>
                                    Order Now
                                </Button>
                                <Typography variant='h5' sx={{marginLeft:'.4rem'}}>Quatity:{elem.count}</Typography>
                                    
                            </CardActions>
                        </Cardstyle>)
                        }
)
}
                        </Stackstyle>

    )
}