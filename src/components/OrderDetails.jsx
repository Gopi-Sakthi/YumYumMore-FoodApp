import { useSelector } from "react-redux";

const OrderDetails = () => {
  const orderDetails = useSelector((store) => store.cart.orderDetails) || [];

  return (
    <div className="text-center p-4 min-h-[70vh]">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      {orderDetails.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        orderDetails.map((order, index) => (
          <div key={index} className="border p-4 mb-4 rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold">
              Order #{index + 1} - {order.date}
            </h3>
            {order.items.map((item) => (
              <p key={item.card.info.id} className="text-md">
                {item.card.info.name} - {item.quantity} x Rs.{" "}
                {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
              </p>
            ))}
            <p className="font-medium mt-2">Total Cost: Rs. {order.totalCost.toFixed(2)}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderDetails;
