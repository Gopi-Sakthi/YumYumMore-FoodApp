import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body= () => {
    const [restaurant,setRestaurant]=useState([]);
    const [searchRestaurant,setSearchRestaurant]=useState([]);
    const [search,setSearch]=useState("");

      useEffect(()=>{
         fetchData();
        },[]);

        const fetchData = async () => {
          try {
              const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.029514691345097&lng=80.25291771972358&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
              const json=await data.json();
              setRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
              setSearchRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);          } catch (error) {
              console.error("Error fetching data:", error);
              setRestaurant([]); // Set to an empty array on error
          }
      };

    const handleOnChange= (e) =>{
      setSearch(e.target.value);
    }
    const handleSearchOnClick= () => {
      const searchedRestaurant = restaurant.filter((res) =>
        res.info.name.toLowerCase().includes(search.toLowerCase())
      );
      setSearchRestaurant(searchedRestaurant);
    };
    const handleAllResOnClick=() => {
      setSearchRestaurant(restaurant);
    };
    const handleTopResOnClick=() =>
      {
          const topRes = restaurant.filter( 
              (res)=>res.info.avgRating > 4.5
          );
          setSearchRestaurant(topRes)
      };
    const handleFastDelOnClick=()=>{
      const fastDeliveryRes = restaurant.filter(
      (res) => res.info.sla.deliveryTime < 30 );
    setSearchRestaurant(fastDeliveryRes);
    };
    
    const displayRes=searchRestaurant.map((restaurant)=>(
      <Link 
      to={"/restaurants/"+restaurant.info.id}
      key={restaurant.info.id} 
      >
       <RestaurantCard resData={restaurant}/>
      </Link>
    ));

return restaurant.length===0 ? <Shimmer/>:(

      <div className="m-2 h-auto]">
        <div className="flex justify-around px-5 items-center bg-amber-50">
            <div className="search">
                <input className="border border-black h-10 p-2 rounded-lg" type="text" value={search} onChange={handleOnChange}/>
                <button className="px-4 py-2 m-2 bg-green-200 rounded-lg"
                onClick={handleSearchOnClick}>Search</button>
            </div>
            <div>
                <button className="px-4 py-2 m-2 bg-orange-200 rounded-lg"
                 onClick={handleAllResOnClick}>
                    All Restaurants
                </button>
            </div>
            <div className="Top-Res-btn">
                <button className="px-4 py-2 m-2 bg-orange-200 rounded-lg"
                onClick={handleTopResOnClick}>Top Rated  Restraunts</button>
            </div>
            <div className="FastDelRes">
                <button className="px-4 py-2 m-2 bg-orange-200 rounded-lg"
                onClick={handleFastDelOnClick}> Fastest Delivery</button> 
            </div>
        </div>
        <div className="flex flex-wrap justify-stretch">
            {displayRes}
        </div>
      </div>
    )
  }

  export default Body;