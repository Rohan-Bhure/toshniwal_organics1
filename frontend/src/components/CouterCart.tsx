import { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(0);

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleIncrement = () => {
    setQuantity((prev) => (prev < 99999 ? prev + 1 : 99999));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d{0,5}$/.test(value)) {
      setQuantity(Number(value));
    }
  };

  return (
    <form className="max-w-[100px] h-[25px] mx-auto">
     
      <div className="relative flex items-center max-w-[8rem]">
        <button
          type="button"
          onClick={handleDecrement}
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3  focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-2 h-2 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
          type="text"
          id="quantity-input"
          value={quantity}
          onChange={handleChange}
          className="bg-gray-50 border-x-0 border-gray-300 h-9 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="99999"
          required
        />
        <button
          type="button"
          onClick={handleIncrement}
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3  focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-2 h-2 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
     
    </form>
  );
};

export default QuantitySelector;
