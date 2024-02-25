import React, { useContext, useState } from "react";
import Navbar from "../../components/Navbar";
import data from "../../data/EstateData.json";
import Card from "../../components/Card";
import {EStateContext} from "../../data/context"
const Home = () => {
  const ctx=useContext(EStateContext)
  const estateData=ctx.filteredList;

  const [city,setCity]=useState("");
  const [date,setDate]=useState("");
  const [rentalType,setRentalType]=useState("");
  const [price,setPrice]=useState(500);

 const SearchData=(e)=>{
      e.preventDefault();
      const newList=data.filter((list)=> {return (list.city.includes(city) && list.rental_type.includes(rentalType) && list.price_per_day<=parseInt(price))});
      ctx.SetFilterList(newList);
      console.log(city,rentalType,price,newList);
          
  }
  return (
    <div>
      <Navbar />

      <div className="flex justify-center">
        <form className="flex gap-2 overflow-hidden bg-gray-100 w-fit p-4 m-4 flex-wrap" onSubmit={SearchData}>
          <div className="flex flex-col  border-r-[1px] border-solid border-gray-200  px-4 hover:bg-white overflow-hidden">
            <span>Enter City</span>
            <input
              type="text"
              className=" bg-inherit outline-none"
              placeholder="Enter city"
              value={city}
              onChange={(e)=>setCity(e.target.value)}
            />
          </div>
          <div className="flex flex-col  border-r-[1px] border-solid border-gray-200  px-4 hover:bg-white overflow-hidden">
            <span>Check-in</span>
            <input
              type="date"
              className=" bg-inherit outline-none"
              placeholder="Add date"
              value={date}
              onChange={(e)=>setDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col border-r-[1px] border-solid border-gray-200  px-4 hover:bg-white overflow-hidden">
            <span>Price</span>
            <select
              className=" bg-inherit outline-none"
              placeholder="select Price"
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
            >
              <option value="500">500</option>
              <option value="800">500-800</option>
              <option value="1200">800-1200</option>
              <option value="1500">1200-1500</option>
              <option value="2500">1500-2500</option>
            </select>
          </div>
          <div className="flex flex-col  border-solid border-gray-200  px-4 hover:bg-white overflow-hidden">
            <span>Rental Type</span>
            <select
              className=" bg-inherit outline-none"
              placeholder="select rental type"
              value={rentalType}
              onChange={(e)=>{setRentalType(e.target.value)}}
            >
              <option value="">All</option>
              <option value="mansion">Mansion</option>
              <option value="chalet">Chalet</option>
              <option value="villa">Villa</option>
              <option value="cottage">Cottage</option>
              <option value="cabin">Cabin</option>
              <option value="apartment">Apartment</option>
            </select>
          </div>
          <div className="flex flex-col px-6 border-r-[1px] border-solid border-gray-200 bg-purple-900 text-white  overflow-hidden">
            <button className="m-auto" type="submit">Search</button>
          </div>
        </form>
      </div>
      {
       estateData.length>0?<div className="flex flex-wrap gap-6 justify-center p-4">
       {estateData.map((house, index) => (
         <Card key={index} {...house} />
       ))}
     </div>:<div className="flex text-lg gap-6 justify-center p-4"> no such data available</div>
      }
    </div>
  );
};

export default Home;
