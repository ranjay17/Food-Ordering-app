import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearItems = () => {
    dispatch(clearCart());
  };

  const handleOrder = () =>{
    alert("Order Placed Successfully!");
    dispatch(clearCart())
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          <ItemList item={cartItems} />

          <div className="flex justify-between items-center mt-6">
            <p className="font-semibold text-lg">
              Total Items: {cartItems.length}
            </p>
            <Link to="/order">
              <button
                onClick={handleOrder}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                order
              </button>
            </Link>
            <button
              onClick={handleClearItems}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
