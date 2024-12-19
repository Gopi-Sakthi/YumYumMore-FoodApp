const PlaceOrder = ({ cartItems, totalCost, addToOrderHistory, isOrderPlaced, setIsOrderPlaced }) => {
  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    addToOrderHistory(); // Add order to history
  };

  return (
    <div>
      {!isOrderPlaced && (
        <button
          onClick={handlePlaceOrder}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg my-4"
        >
          Place Order
        </button>
      )}
    </div>
  );
};

export default PlaceOrder;
