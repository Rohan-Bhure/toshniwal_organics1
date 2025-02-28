import React from "react";

const OrderSummary: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-80 max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-4">Order summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between text-gray-400">
          <span>Original price</span>
          <span className="font-medium"><span>&#8377;</span> 7,592.00</span>
        </div>
        <div className="flex justify-between text-green-400">
          <span>Savings</span>
          <span className="font-medium">-<span>&#8377;</span> 299.00</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>Store Pickup</span>
          <span className="font-medium"><span>&#8377;</span> 99</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>Tax</span>
          <span className="font-medium"><span>&#8377;</span> 799</span>
        </div>
        <hr className="border-gray-600 my-2" />
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span><span>&#8377;</span> 8,191.00</span>
        </div>
      </div>
      <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium text-center">
        Proceed to Checkout
      </button>
      <p className="text-center text-gray-400 mt-3 text-sm">
        or <a href="#" className="text-blue-400 hover:underline">Continue Shopping →</a>
      </p>
    </div>
  );
};

export default OrderSummary;
