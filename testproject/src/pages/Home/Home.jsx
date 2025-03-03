import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
//import Hero from '../../Components/Hero/Hero'

const Home = () => {

const [category,setcategory] = useState("All");

  return (
    <div>
      <Header/>
     <ExploreMenu category={category} setCategory={setcategory}/>
     <FoodDisplay category={category}/>
    </div>
  )
}

export default Home;
