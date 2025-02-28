import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const QuantitySelector: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(isNaN(value) || value < 1 ? 1 : value);
  };

  return (
    <div className="flex items-center space-x-2 border border-gray-300 rounded-lg p-1 w-32 bg-white">
      <button
        onClick={handleDecrease}
        className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
      >
        <Minus className="h-4 w-4" />
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        className="w-10 text-center bg-transparent outline-none"
      />
      <button
        onClick={handleIncrease}
        className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300  "
      >
        <Plus className="h-4 w-4 " />
      </button>
    </div>
  );
};

export default QuantitySelector;
