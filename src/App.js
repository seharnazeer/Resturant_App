import React,{useState} from "react"
import {Main,Menu,Navbar,Theme,Cartlist,Darktheme,About} from "./Components";
import {createTheme,ThemeProvider} from "@mui/material/styles"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  const [cart,setcart]=useState(0);
  const [cartdata,setcartdata]=useState([]);
  const [toggle,settoggle]=useState(false)
  return (
    <BrowserRouter>
    <ThemeProvider theme={toggle?Darktheme:Theme}>
      <Navbar cart={cart} toggle={toggle} settoggle={settoggle}/>
      <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/menu" element={<Menu  setcart={setcart} cart={cart} setcartdata={setcartdata} cartdata={cartdata}/>}></Route>
      <Route path="/cartlist" element={<Cartlist  cartdata={cartdata} setcartdata={setcartdata} cart={cart} setcart={setcart}/>}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
