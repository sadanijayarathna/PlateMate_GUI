import React, { useState } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

import About from './Components/About/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'

const App = () => {
const [showLogin,setShowLogin] = useState(false)


  return (
<>
{showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}

<div className="app">
      <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<PlaceOrder/>}/>
        </Routes>
      <Hero/>
      <About/>
    </div>
    <Footer/>

</>

   
  )
}

export default App;



