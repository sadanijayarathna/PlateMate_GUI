import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'
import  {assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'


const Navbar = ({setShowLogin}) => {
  
const [menu,setMenu] = useState("My recipies");


  return (
    <nav className='container'>
      <img src={logo} alt="Plate Mate Logo" className='logo'/>
      <ul>
        <Link  to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}> Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("My recipies")} className={menu==="My recipies"?"active":""}> My recipes</a>
        <a href='#about' onClick={()=>setMenu("About us")} className={menu==="About us"?"active":""}> About us</a>
        <a href='#app-download' onClick={()=>setMenu("Mobile app")} className={menu==="Mobile app"?"active":""}> Mobile app</a>
        <a href='#footer' onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}> Contact us</a>
      </ul>
            <div className="navbar-right">
              <img src={assets.search_icon} alt=""/>
              <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt=""/>
                <div className="dot"></div>
                </div>

                <div className='sign In'>
                <button onClick={()=>setShowLogin(true)} className='signin-btn' >Sign In</button>
            </div>

     
      </div>

    </nav>
  )
}

export default Navbar
