import React from 'react'
import './Header.css'
import dark_arrow from '../../assets/dark_arrow.png';
const Header = () => {
  return (
     <div className='header'>
           <div className="header-contents">
           <h1>"From Our Plate to Yours – Let’s Cook with PlateMate!"</h1>
           <p>"Welcome to PlateMate – where your culinary journey begins! Dive into a world of flavors, creativity, and endless inspiration. Whether you're a seasoned chef or a passionate foodie, PlateMate brings you closer to the art of cooking. Discover unique recipes, reimagine your classics, and share your culinary creations with a vibrant community of food lovers. From your kitchen to the world, let PlateMate be your ultimate recipe companion – because every plate tells a story!"</p>
         <button className='btn'>Explore more <img src={dark_arrow}  alt=""/></button>
         </div>
         </div>
   
  )
}

export default Header;
