import React, { useState } from 'react'
import { styled, Card, CardMedia, CardContent, Stack, Typography, CardActions, Button, Modal, Snackbar,  Alert, TextField } from "@mui/material";
import { Close } from "@mui/icons-material";
import { isEmpty } from 'lodash';
export const Menu = ({ cart, setcart, setcartdata, cartdata }) => {
    console.log(cartdata);
    const [order, setorder] = useState({});
    const [display, setdisplay] = useState(false);
    const [snack, setsnack] = useState(false)
    const [counter, setcounter] = useState(1);
    const data = [{ name: 'Pizza', desc: "lorem ipsum had gukl lorem ipsum  lorem hey world huwbh", Price: '10$', src: "./Resturant_App/Pictures/1.jpg", count: 0, id: 1 },
    { name: 'Pizza Fajita', desc: "lorem ipsum had gukl lorem ipsum  lorem hey world huwbh", Price: '10$', src: "./Resturant_App/Pictures/2.jpg", count: 0, id: 2  },
    { name: 'Chicken Pizza', desc: "lorem ipsum had gukl lorem ipsum  lorem hey world huwbh", Price: '10$', src: "./Resturant_App/Pictures/3.jpg", count: 0, id: 3  },
    { name: 'Cheesy Pizza', desc: "lorem ipsum had gukl lorem ipsum  lorem hey world huwbh", Price: '10$', src: "./Resturant_App/Pictures/4.jpg", count: 0, id: 4  },
    { name: 'Pizza Crust', desc: "lorem ipsum had gukl lorem ipsum  lorem hey world huwbh", Price: '10$', src: "./Resturant_App/Pictures/5.jpg", count: 0, id: 5  },
    { name: 'Tikka Pizza', desc: "lorem ipsum had gukl lorem ipsum  lorem hey world huwbh", Price: '10$', src: "./Resturant_App/Pictures/6.jpg", count: 0, id: 6  },
        , { name: 'Sushi', desc: "lorem ipsum had gukl lorem ipsum  lorem hey world huwbh", Price: '10$', src: "./Resturant_App/Pictures/7.jpg", count: 0, id: 7  },
    { name: 'White Pasta', desc: "lorem ipsum had gukl lorem ipsum  lorem hey world huwbh", Price: '10$', src: "./Resturant_App/Pictures/8.jpg", count: 0, id: 8  },
    { name: 'White spagetti', desc: "lorem ipsum had gukl lorem ipsum  lorem hey world huwbh", Price: '10$', src: "./Resturant_App/Pictures/9.jpg", count: 0, id: 9  },
    { name: 'Spagetti', desc: "lorem ipsum had gukl lorem ipsum  lorem hey world huwbh", Price: '10$', src: "./Resturant_App/Pictures/10.jpg", count: 0, id: 10  }]

    const Cardstyle = styled(Card)(({ theme }) => ({
        width: "400px",
        height: '400px'
    }))
    const Image = styled('img')((theme) => ({
        width: '100%',
        height: '100%',
        objectFit: 'center'
    }))
    const Stackstyle = styled(Stack)(({ theme }) => ({
        display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '20px',
        marginTop: '3rem',
    }))


    return (<>
        <Stackstyle>
            {
                data.map((elem, index) => {
                    const alreadyOrderedItem = cartdata.filter(({id}) => id === elem.id)
                    const { name, src, Price, desc } = !isEmpty(alreadyOrderedItem) ? alreadyOrderedItem[0] : elem;
                    return (
                        <Cardstyle key={index}>
                            <CardMedia component='img' image={src} height='200px'>
                            </CardMedia>
                            <CardContent>
                                <Typography variant='h4'>{name}</Typography>
                                <Typography variant='p' >
                                    {desc}
                                </Typography>
                                <Typography variant='h5'>
                                    <strong>Price</strong>:{Price}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant='outlined' color='info' onClick={() => { 
                                    const alreadyOrderedItem = cartdata.filter(({id}) => id === elem.id)
                                    !isEmpty(alreadyOrderedItem) ? setorder(alreadyOrderedItem[0]) : setorder(elem);
                                    setdisplay(true) }}>
                                    Order Now
                                </Button>
                            </CardActions>
                        </Cardstyle>
                    )
                })
            }

        </Stackstyle>
        <Modal open={display} onClose={() => { setdisplay(false); setsnack(false) }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Cardstyle>
                <CardMedia component='img' image={order.src} height='200px'>
                </CardMedia>
                <CardContent>
                    <Typography variant='h4'>{order.name}</Typography>
                    <Typography variant='p' >
                        {order.desc}
                    </Typography>
                    <Typography variant='h5'>
                        <strong>Price</strong>:{order.Price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" sx={{ width: '.2rem' }} onClick={() => { order.count = order.count - 1; setcounter(counter+1) }}><Typography>-</Typography></Button>
                    <TextField value={order.count} sx={{ width: '2.6rem', marginLeft: '.4rem' }} />
                    <Button variant="outlined" sx={{ width: '.2rem' }} onClick={() => { order.count = order.count + 1; setcounter(counter - 1) }}><Typography>+</Typography></Button>
                    <Button variant='outlined' disabled={order.count < 1} color='info' onClick={() => { setcartdata([...cartdata.filter(({id}) => id !== order.id), order]); setsnack(true);setcart(cart+order.count) }}>
                        Add to cart
                    </Button>
                </CardActions>
                <Snackbar
                    color='primary'
                    open={snack}
                    autoHideDuration={6000}
                    onClose={() => setsnack(false)}
                    action={<Close onClick={() => setsnack(false)}></Close>}
                >
                    <Alert onClose={() => setsnack(false)} severity="success" sx={{ width: '100%' }}>
                        <Typography>
                            {`You ordered ${order.name} for ${order.Price}`}
                        </Typography>

                    </Alert>
                </Snackbar>
            </Cardstyle>


        </Modal>
    </>
    )
}
