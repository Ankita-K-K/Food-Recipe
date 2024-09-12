import React from 'react'
import { Link } from 'react-router-dom'

const RecipeItem = ({item}) => {
  return (
    <div className='w-72 bg-white/75 rounded-xl shadow-xl px-4 py-4 overflow-hidden flex flex-col justify-center items-start gap-4'>
      <div>
        <img src={item?.image_url} alt={item?.title} className='h-44 w-64 rounded-xl'/>
      </div>
      <div className='w-68'>
        <p className='text-cyan-700 text-sm'>{item?.publisher}</p>
        <p className='text-xl font-semibold w-68 line-clamp-1'>{item?.title}</p>
      </div>
      <div>
        <Link to={`/recipe/${item?.recipe_id}`} className='bg-black text-white px-4 py-2 rounded-lg'>Recipe Details</Link>
      </div>
    </div>
  )
}

export default RecipeItem
