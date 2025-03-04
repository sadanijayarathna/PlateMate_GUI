import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-counter">
<div className="footer-content-left">
<img src={assets.logo} alt='' />
<p>Delicious meals,Great flavors, endless memories, crafted with love.Every bite tells a story – embrace the experience. © 2025 PlateMate.</p>
<div className="footer-social-icons">
<img src={assets.facebook_icon} alt="" />
<img src={assets.twitter_icon} alt="" />
<img src={assets.linkedin_icon} alt="" />

</div>
</div>
<div className="footer-content-center">
<h2>COMPANY</h2>
<ul>
    <li>Home</li>
    <li>About us</li>
    <li>Privacy policy</li>
    
</ul>
</div>
<div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+94112345670</li>
    <li>Contact@platemate.com</li>
</ul>
</div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2025 © PlateMate.com - All Rights Reserved.</p>
      
    </div>
  )
}

export default Footer
