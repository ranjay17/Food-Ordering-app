const OrderSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mx-auto mb-6">
          ✅
        </div>
        <h1 className="text-2xl font-bold text-green-700 mb-3">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-600 mb-6">
          Your order is on the way 🚚
        </p>
      </div>
    </div>
  );
};

export default OrderSuccess;
