import {CDN_URL} from  "../utils/constants"

const RestaurantCard = (data) => {
    const{cloudinaryImageId,name,costForTwo,cuisines,avgRating}=data?.resData?.info;
    return(
      <div className="w-[200px] m-2 pb-2 rounded-xl bg-slate-200 min-h-[300px]">
          <img className="w-full h-[120px] p-2  rounded-2xl"src={CDN_URL+ cloudinaryImageId} alt="Logo" />
          <h3 className="px-4 font-semibold py-1">{name}</h3>
          <h4 className="px-4 pb-1">{costForTwo}</h4>
          <p className="px-4 pb-1">{cuisines.join(", ")}</p>
          <p className="px-4 pb-1">{avgRating} stars</p>
          <p className="px-4 pb-1">{data.resData.info.sla.slaString}</p>
      </div>
    )
  } 

  export default RestaurantCard;