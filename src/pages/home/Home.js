import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/SearchContext'
import RecipeItem from './RecipeItem';

const Home = () => {
  const {loading, recipeList} = useContext(GlobalContext);
  console.log(recipeList);

  if(loading){
    return <div>
      <p className='font-semibold text-xl text-center mt-8'>Loading... please wait!</p>
    </div>
  }


  return (
    <div className='flex flex-wrap justify-center items-center gap-8 my-8 mx-[0.47rem]'>
      {
        recipeList && recipeList.length > 0 ? recipeList.map((item)=><RecipeItem key={item?.recipe_id} item={item}/>):<div>
          <p className='flex justify-center items-center text-xl font-semibold mt-8'>Nothing to show Please search something!</p>
        </div>
      }
    </div>
  )
}

export default Home
