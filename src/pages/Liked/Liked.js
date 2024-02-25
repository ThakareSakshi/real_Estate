import React from 'react'
import Navbar from '../../components/Navbar'
import { useContext } from 'react'
import { EStateContext } from '../../data/context'
import LikedCard from '../../components/LikedCards'

const Liked = () => {

    const ctx=useContext(EStateContext);
    const likedData=ctx.favouriteList;
  return (
    <div>
      <Navbar/>
     <h2 className='text-center font-medium text-xl'>Places You  are interested in..</h2>
      <div className='flex flex-wrap gap-4 p-4 justify-center'>
        {
            likedData.map((data,index)=>{
               return <LikedCard key={index} {...data}/>
            })
        }
      </div>
    </div>
  )
}

export default Liked
