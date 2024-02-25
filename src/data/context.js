import { createContext, useState } from "react";
import edata from "./EstateData.json"

export const EStateContext=createContext();



const Context = (props) => {

    const [favouriteList,setFavouriteList]=useState(JSON.parse(localStorage.getItem("liked")) || []);
    const [filteredList,SetFilterList]=useState(edata);
    const data={
        favouriteList,
        setFavouriteList,
        filteredList,
        SetFilterList
    }
  return (
    <div>
      <EStateContext.Provider value={data}>
          {
    props.children
         }
      </EStateContext.Provider>
    </div>
  )
}

export default Context

