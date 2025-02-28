import React, { useState } from "react";
import { Minus, Plus, Heart, X } from "lucide-react";

const BuyCart: React.FC = () => {
  const [quantity, setQuantity] =useState(0)
  function Inc(){
    if(quantity>-1 && quantity <20)
    setQuantity((i)=>i+1)
  }
  function Dec(){
    if(quantity>0 && quantity<21)
    setQuantity((i)=>i-1)
  }
  return (
    <div className="rounded-2xl border border-gray-700 bg-gray-800 p-4 shadow-lg w-full max-w-lg mx-auto">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        {/* Product Image */}
        <img
          className="h-20 w-20 object-contain"
          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
          alt="iMac"
        />

        {/* Product Details */}
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-white font-medium text-sm sm:text-base leading-tight">
            Apple iMac (2023) - M3, 24" Retina 4.5K, 8GB RAM, 256GB SSD
          </h3>
          <div className="flex justify-center sm:justify-start gap-4 mt-2">
            <button className="flex items-center text-gray-400 hover:text-white text-sm">
              <Heart className="h-5 w-5 mr-1" /> Favorite
            </button>
            <button className="flex items-center text-red-500 hover:text-red-600 text-sm">
              <X className="h-5 w-5 mr-1" /> Remove
            </button>
          </div>
        </div>
      </div>

      {/* Quantity and Price */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center border border-gray-600 rounded-lg p-1 px-3">
          <button className="text-white hover:text-gray-300" onClick={Dec}>
            <Minus className="h-4 w-4" />
          </button>
          <span className="px-4 text-white text-lg">{quantity}</span>
          <button className="text-white hover:text-gray-300 " onClick={Inc}>
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <p className="text-lg font-bold text-white">$1,499</p>
      </div>
    </div>
  );
};

export default BuyCart;