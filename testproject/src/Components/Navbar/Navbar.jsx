import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>My recipes</li>
        <li>About us</li>
        <li>Favourites</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
