import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  const redirectToLikepage=()=>{
  navigate("/liked")
       
  }
  return (
    <div className='flex justify-between p-2 px-4 bg-gray-100'>
    <div className=''>
        <i className="fa-solid fa-house-chimney text-2xl text-purple-800"></i>
        <span className='font-bold text-xl px-2'>Estrategy</span>
    </div>
    <div className='flex gap-2' >
     <form>
      <input type="search" className='p-1' placeholder='search...'/>
      <button className='p-1 px-4 bg-purple-800 text-white font-medium '>Search</button>
     </form>
       <i className="fa-solid fa-heart text-red-600 text-xl px-2 cursor-pointer" onClick={redirectToLikepage}></i>
    </div>
  </div>
  )
}

export default Navbar
