import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'
import { assets } from '../../assets/frontend_assets/assets'


const Navbar = () => {
  
const [menu,setMenu] = useState("My recipies");


  return (
    <nav className='container'>
      <img src={logo} alt="Plate Mate Logo" className='logo'/>
      <ul>
        <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("My recipies")} className={menu==="My recipies"?"active":""}>My recipes</li>
        
        <li onClick={()=>setMenu("Favorities")} className={menu==="Favorities"?"active":""}>Favorites</li>
        
        <li onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</li>
      </ul>
            <div className="navbar-right">
              <img src={assets.search_icon} alt=""/>
              <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt=""/>
                <div className="dot"></div>
                </div>

            </div>

      <div className='signin'>
        <button className='signin-btn'>Sign In</button>
      </div>

    </nav>
  )
}

export default Navbar
