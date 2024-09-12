import React, { useContext, useEffect } from 'react'
import {GlobalContext} from './../../context/SearchContext'
import { useParams } from 'react-router-dom';

const Details = () => {
  const {recipeDetails,favoriteList, setRecipeDetails, handleAddToFav} = useContext(GlobalContext);
  console.log(favoriteList)

  const {food_id} = useParams();
  console.log(food_id);

  async function getDetails(){
    const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${food_id}`);
    const data = await response.json();
    console.log(data.recipe);
    data && setRecipeDetails(data.recipe);
  }

  useEffect(()=>{
    food_id && getDetails();
  },[])

  if(recipeDetails === null){
    return <div>
      <p className='text-xl font-semibold text-center mt-8'>Please wait !</p>
    </div>
  }

  const {image_url, ingredients, publisher, title} = recipeDetails;
  
  return (
    <div className='flex items-center justify-center gap-16 m-4'>
        <div className='flex flex-col gap-2 justify-center items-start ml-4 mt-20'>
          <img src={image_url} alt={title} title={title} className='hover:shadow-xl duration-300 h-60 w-96 rounded-lg'/>
          <div className='flex justify-center gap-6 items-center'>
          <div className='flex flex-col items-start justify-center ml-3 gap-1 max-w-44'>
          <p className='text-cyan-700 text-sm'>{publisher}</p>
          <p className='text-xl font-semibold line-clamp-1'>{title}</p>
          </div>
          <button onClick={()=>handleAddToFav(recipeDetails)} className='bg-black text-white px-2 py-2 rounded-lg mt-2 text-sm'>
            {
              favoriteList.findIndex(item=>item.recipe_id === recipeDetails.recipe_id) === -1 ? "Add to favorites" : "Remove from favorites"
            }
          </button>
          </div>
        </div>
        <div>
            <div className='flex flex-col gap-2 justify-center items-start mt-6'>
              <p className='text-2xl font-semibold'>Ingredients ( {title} )</p>
              <div>
                {
                  recipeDetails && ingredients && ingredients.map((item)=>
                    <ul>
                      <li>{item}</li>
                    </ul>
                  )
                }
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default Details
