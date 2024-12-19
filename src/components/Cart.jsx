import { useState } from "react";
import PlaceOrder from "./PlaceOrder"; // Assuming PlaceOrder is in the same directory
import { useSelector, useDispatch } from "react-redux";
import { clearCart, OrderHistory } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const orderHistory = useSelector((store) => store.cart.orderDetails); // Get order history from Redux store
  const dispatch = useDispatch();

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.card.info.price) / 100 || parseFloat(item.card.info.defaultPrice) / 100 || 0;
    if (isNaN(itemPrice)) {
      console.error("Invalid price for item:", item.card.info);
      return total;
    }
    return total + itemPrice * item.quantity;
  }, 0);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleOrderHistory = () => {
    const newOrder = {
      items: cartItems,
      totalCost: totalCost,
      totalItems: totalItems,
      date: new Date().toLocaleString(),
    };
    dispatch(OrderHistory(newOrder)); // Add order to history
    handleClearCart();
    setIsOrderPlaced(true);
  };

  return (
    <div className="text-center m-auto p-4 w-6/12 min-h-[70vh]">
      {isOrderPlaced ? (
        <div>
          <h2 className="text-green-600 font-bold text-2xl mb-2">
            Order Placed Successfully!
          </h2>
          {/* Displaying most recent order summary */}
          <h2>
            Total Items: {orderHistory[orderHistory.length - 1]?.totalItems} - Total Cost: Rs.{" "}
            {orderHistory[orderHistory.length - 1]?.totalCost.toFixed(2)}
          </h2>
        </div>
      ) : (
        <>
          {cartItems.length === 0 ? (
            <h1 className="text-2xl font-bold">Cart is Empty...</h1> // Show message if cart is empty
          ) : (
            <>
              <div className="flex justify-between">
                <h1 className="p-2 m-2 font-medium text-xl">Cart</h1>
                <button onClick={handleClearCart} className="border p-2 m-2 bg-slate-100">
                  Clear Cart
                </button>
              </div>

              <div className="py-2">
                <h2 className="font-medium text-xl">Total Items: {totalItems}</h2>
                <h2 className="font-medium text-xl">Total Cost: Rs. {totalCost.toFixed(2)}</h2>
              </div>

              <PlaceOrder
                cartItems={cartItems}
                totalCost={totalCost}
                addToOrderHistory={handleOrderHistory}
                isOrderPlaced={isOrderPlaced}
                setIsOrderPlaced={setIsOrderPlaced} // Pass state setter to PlaceOrder
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;