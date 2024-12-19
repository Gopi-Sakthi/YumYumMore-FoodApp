import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../customHooks/useRestaurantMenu";
import ItemCategory from "./ItemCategory";
import { useState } from "react";

const RestaurantMenu =() =>{

    const {resId}=useParams()
    const resInfo=useRestaurantMenu(resId);

    const [showIndex,setShowIndex]=useState(null);

    if(resInfo===null) return <Shimmer/>;

    const { name, cuisines, costForTwoMessage,avgRating,id} = resInfo?.cards[2]?.card?.card?.info;
    const itemsCard =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards;
    // console.log(itemsCard)
    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"]===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(categories)


    return (resInfo===null) ? (<Shimmer/>) : (
        <div className="m-2 text-center min-h-[70vh]">
            <h1 className="font-bold  py-2 text-3xl">{name}</h1>
            <p className="font-medium text-xl">{cuisines.join(", ")}-{costForTwoMessage}</p>

            {categories.map((category,index)=>(
                 <ItemCategory key={category?.card?.card?.title}
                 data={category?.card?.card}
                 index={index}
                 showIndex={showIndex}
                 showItems={index===showIndex} 
                 setShowIndex={setShowIndex}
                 />
             ))}
            
        </div>
    )
}
export default RestaurantMenu