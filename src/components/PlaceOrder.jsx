import { useDispatch } from "react-redux";
import { FOOD_URL } from "../utils/constants";
import { updateQuantity } from "../utils/cartSlice";

const PlaceOrder = ({ cartItems, addToOrderHistory, isOrderPlaced, setIsOrderPlaced }) => {
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    addToOrderHistory();
  };

  const increaseItem = (itemId, currentQuantity) => {
    dispatch(updateQuantity({ itemId, quantity: currentQuantity + 1 }));
  };

  const decreaseItem = (itemId, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updateQuantity({ itemId, quantity: currentQuantity - 1 }));
    }
  };

  return (
    <div>
      {!isOrderPlaced && (
        <div>
          <div className="py-4 ">
            {cartItems.map((item) => (
              <div key={item.card.info.id} className="flex justify-between border-b py-2">
                <div className="w-9/12 text-left">
                  <h3 className="text-lg font-medium">
                    {item.card.info.name || "Unnamed Item"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Rs.{" "}
                    {(
                      parseFloat(item.card.info.price) / 100 ||
                      parseFloat(item.card.info.defaultPrice) / 100 ||
                      0
                    ).toFixed(2)}
                  </p>
                  <p>
                  {item.card.info.description || "No description"}
                  </p>
                </div>
                <div className="w-3/12 justify-items-center">
                  <img className="h-[100px] w-28 rounded-xl"
                    src={FOOD_URL + item.card.info.imageId}
                    alt="No image"/>
                  <p className="border rounded-xl p-1 my-2">
                    Quantity: {item.quantity}
                  </p>
                  <p className="py-1  text-white">
                  <span className="border rounded-lg bg-green-300  hover:bg-green-700">
                      <button className="w-10"
                        onClick={() =>
                          increaseItem(item.card.info.id, item.quantity)}> +
                      </button>
                    </span>|
                    <span className="border rounded-lg bg-green-300  hover:bg-green-700">
                      <button className="w-10"
                        onClick={() =>
                          decreaseItem(item.card.info.id, item.quantity)}> -
                      </button>
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handlePlaceOrder}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg my-4"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;
