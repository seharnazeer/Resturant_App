import React, { useState } from "react";
import "../Styles/navbar.css";
import { AppBar, Toolbar, styled, Typography, Box, IconButton, Avatar, Button, Drawer, Badge, Switch, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom"
import { Menu, ShoppingCart } from "@mui/icons-material";
export const Navbar = ({ cart, toggle, settoggle }) => {
    const navigate = useNavigate();
    const [display, setdisplay] = useState(false);
    const navelem = [{ title: 'Home', path: './Restuarnt_app/' }, { title: 'Menu', path: './Restuarnt_app/menu' }, { title: 'About', path: './Restuarnt_app/about' }];
    const Tool = styled(Toolbar)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: 'primary',
        margin: '0 .3rem',
        [theme.breakpoints.up("sm")]: {
            margin: '0 4rem',
        }

    }))
    const Drawerstyle = styled(Drawer)(({ theme }) => ({
        width: '50vw',
        height: '100vh',
    }))
    const BoxStyled = styled(Box)(({ theme }) => ({
        display: "none",
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        [theme.breakpoints.up("sm")]: {
            display: 'flex'
        }

    }))
    const Typographystyle = styled(Typography)({
        cursor: "pointer",
        fontSize: '1.5rem',
        padding: ".6rem",
        color: "secondary",
        textAlign: 'center'
    })
    const Avatarstyle = styled(Avatar)({
        width: '5rem',
        height: '5rem'
    })
    return (
        <>
            <AppBar sx={{ position: 'sticky', height: '15vh' }}>
                <Tool>
                    <IconButton>
                        <Avatarstyle src="./Resturant_App/Pictures/logo.png" alt="logo"></Avatarstyle>
                    </IconButton>
                    <BoxStyled >
                        {
                            navelem.map((elem, index) => (
                                <IconButton key={index} onClick={() => navigate(elem.path)}>
                                    <Typographystyle variant="h5">
                                        {elem.title}
                                    </Typographystyle>
                                </IconButton>
                            ))
                        }
                        {(cart >= 1) ?
                            <Badge badgeContent={cart} color='secondary' onClick={() => navigate('/cartlist')}>
                                <ShoppingCart sx={{ width: '2rem', height: '2rem' }} color='secondary' />
                            </Badge> : null
                        }
                        <Switch checked={toggle} onChange={() => settoggle(!toggle)} color="secondary"></Switch>

                    </BoxStyled>
                    <Menu sx={{ display: { md: 'none', lg: 'none', sm: 'none', xs: 'block', xl: 'none' }, width: '3rem', height: '3rem' }} onClick={() => { setdisplay(true) }} />

                </Tool>

            </AppBar>
            <Drawerstyle anchor='bottom' open={display} onClose={() => setdisplay(false)}>
                <Stack>
                    {
                        navelem.map((elem, index) => (
                            <IconButton key={index} onClick={() => navigate(elem.path)}>
                                <Typographystyle variant="h5">
                                    {elem.title}
                                </Typographystyle>
                            </IconButton>
                        ))
                    }

                    {(cart >= 1) ?
                        <Badge sx={{ margin: 'auto', width: '2rem' }} badgeContent={cart} color='secondary' onClick={() => navigate('/cartlist')}>
                            <ShoppingCart sx={{ width: '2rem', height: '2rem' }} color='secondary' />
                        </Badge> : null
                    }
                    <Switch sx={{ margin: 'auto' }} checked={toggle} onChange={() => settoggle(!toggle)} color="secondary"></Switch>
                </Stack>
            </Drawerstyle>
        </>
    )
}
