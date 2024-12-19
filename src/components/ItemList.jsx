import { useDispatch } from "react-redux";
import { FOOD_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="w-full">
      {items.map((item) => (
        <div key={item.card.info.id} className="border-b-2 border-gray-200 flex justify-between py-4">
          <div className="w-9/12 px-4">
            <p className="text-lg font-medium py-2 text-center">
              {item.card.info.name} - Rs.
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </p>
            {/* Description */}
            <p className="text-sm">
              {item.card.info.description.length < 25
                ? item.card.info.description
                : item.card.info.description.split(" ").slice(0, 25).join(" ") + "..."}
            </p>
          </div>
          <div className="p-2 m-2 flex flex-col  items-center justify-between">
            <div className="relative w-full sm:w-auto">
              <button
                className="p-[3px] border bg-green-400 text-white hover:bg-green-600 rounded-xl"
                onClick={() => handleAddItem(item)}
              >
                Add | +
              </button>
            </div>
            <div className="">
              <img
                className="h-[140px] rounded-xl object-cover"
                src={FOOD_URL + item.card.info.imageId}
                alt="No image"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
