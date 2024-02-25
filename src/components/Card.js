import React, { useContext, useEffect, useState } from 'react'
import { EStateContext } from '../data/context';

const Card = (props) => {

    const [isLiked ,setLike]=useState(false);
    const ctx=useContext(EStateContext);
    
    

    useEffect(()=>{
      if(isLiked){
        const list=[...ctx.favouriteList,props];
        ctx.setFavouriteList(list);
        localStorage.setItem("liked",JSON.stringify(list));
        console.log(list) ;
      }
      if(isLiked===false){
        const list =ctx.favouriteList.filter((data)=> data.name!==props.name);
        ctx.setFavouriteList(list);
        localStorage.setItem("liked",JSON.stringify(list));
        console.log(list) ;
      } 
      

    },[isLiked])


  return (
    <div className='min-w-[310px] rounded-xl overflow-hidden w-[320px] shadow-md bg-gray-50'>
        <div className='w-full object-cover h-[60%]'>
            <img src={props.image_url} className='w-full h-full'/>
        </div>
        <div className='w-full p-2 text-left px-4'>
           <div className='flex justify-between'>
              <span className='font-medium text-xl '>{props.name}</span>
             <span onClick={()=>setLike(!isLiked)}>
             {
                isLiked?<i className="fa-solid fa-heart text-red-500 text-lg"></i>:<i className="fa-regular fa-heart"></i>
              }
             </span>

           </div>
            <div className='text-sm text-gray-600 '>
                
                <p>{props.address},{props.city},<br/> {props.state},{props.zipcode}</p>
                <p className='text-black font-medium '>Rs. {props.price_per_day}/per day</p>
                
            </div>

        </div>
      
    </div>
  )
}

export default Card
