import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'
import About from '../../Components/About/About'
//import Hero from '../../Components/Hero/Hero'

const Home = () => {

const [category,setcategory] = useState("All");

  return (
    <div>
      <Header/>
     <ExploreMenu category={category} setCategory={setcategory}/>
     <FoodDisplay category={category}/>
     <About/>
     <AppDownload/>
    </div>
  )
}

export default Home;
