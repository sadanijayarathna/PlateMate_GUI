import React from 'react'
import './About.css'
import about_img from '../../assets/gif.gif'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
    <img src={about_img} alt="" className='about-img'/>
    <img src={play_icon} alt="" className='play-icon'/>

    </div>
        <div className="about-right">
            <h3>ABOUT PLATEMATE </h3>
            <h2>A Home for Food Lovers: Share Your Passion, Inspire Others, and Create Magic on a Plate</h2>
        <p>Welcome to Plate Mate, your ultimate recipe-sharing platform where food lovers from all walks of life come together to explore, create, and share culinary masterpieces. Whether you're a seasoned chef or a kitchen novice, Plate Mate offers a space to discover diverse recipes, exchange cooking tips, and celebrate the joy of homemade meals.</p>
        <p>At Plate Mate, we believe every dish tells a story, and we’re here to help you share yours. From traditional family recipes to innovative creations, our platform connects people through the universal language of food. Join us in building a vibrant community where flavors inspire friendships, and cooking becomes a shared passion.</p>
        <p>Our mission at Plate Mate is to make cooking accessible, exciting, and meaningful for everyone. We strive to create a welcoming space where food enthusiasts can showcase their creativity, learn from one another, and celebrate the beauty of global cuisines. With tools to organize your favorite recipes, upload your own, and explore new ideas, Plate Mate is more than just a website – it’s your trusted companion in the kitchen and beyond.</p>
        </div>
    </div>
  )
}

export default About
