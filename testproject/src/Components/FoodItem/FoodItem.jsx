import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'

const FoodItem = ({id,name,description,image,ingredients, recipe}) => {
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt=''/>
        </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt='' />
        </div>
        <p className="food-item-desc">{description} </p>

         {/* Ingredients Section */}
         <h4>Ingredients</h4>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        {/* Recipe Section */}
        <h4>Recipe</h4>
        <ol>
          {recipe.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>


      </div>
    </div>
  )
}

export default FoodItem;
