import React, { useContext } from 'react'
import { GlobalContext } from '../../context/SearchContext'
import RecipeItem from '../home/RecipeItem';

const Favourites = () => {
  const {favoriteList} = useContext(GlobalContext);
  console.log(favoriteList);
  return (
    <div>
      {
         <div className='flex flex-wrap justify-center items-center gap-8 my-8 mx-[0.47rem]'>
         {
           favoriteList && favoriteList.length > 0 ? favoriteList.map((item)=><RecipeItem key={item?.recipe_id} item={item}/>):<div>
             <p className='flex justify-center items-center text-xl font-semibold mt-8'>Recipes appear when you add to favorites !</p>
           </div>
         }
       </div>
      }
    </div>
  )
}

export default Favourites
