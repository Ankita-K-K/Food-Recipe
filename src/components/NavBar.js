import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/SearchContext'

const NavBar = () => {

    const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext);
    console.log(searchParam);

  return (
    <div className='flex justify-around items-center mt-6'>
      <Link to='/' className='text-xl font-semibold'>Food Recipe</Link>
      <form onSubmit={handleSubmit} className='flex justify-center items-center gap-1'>
        <input placeholder='Enter the food name' value={searchParam} onChange={(event)=>setSearchParam(event.target.value)} className='placeholder-zinc-600 w-60 md:w-96 outline-none p-2 rounded-full shadow-lg focus:shadow-lg focus:shadow-zinc-500'/>
        <button type='submit' className='bg-black text-white px-4 py-2 rounded-full'>Search</button>
      </form>
      <div className='flex gap-6 justify-center items-center'>
        <Link to='/'>Home</Link>
        <Link to='/favorites'>Favorites</Link>
      </div>
    </div>
  )
}

export default NavBar
