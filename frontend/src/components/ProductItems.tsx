import BuyKnow from "../assets/buyKnow.svg";
import QuantitySelector from "./QuantitySelector";

const ProductCard = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold  flex justify-center text-gray-800 mt-6 mb-4 h-auto px-4 pb-2">
        <span className="border-b-4 border-green-900 p-3">Our Products</span>
      </h1>
      <h1 className="text-3xl font-bold  flex justify-center text-green-600 mt-6 mb-4  px-4 pb-2">
        <span className=" p-3">Organic fruits</span>
      </h1>
      <div className="grid grid-cols-4 gap-y-6   ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ProductCard;


const Card: React.FC = () => {
  return (
    <div className="w-full max-w-[330px] mx-auto bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Product Image */}
      <a href="#">
        <img
          className="p-4 rounded-t-lg w-full object-cover"
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="Apple Watch Series 7"
        />
      </a>

      {/* Product Details */}
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>

        {/* Price and Quantity Selector */}
        <div className="flex justify-between items-center mt-4 mb-5">
         <div>
         <span className="text-[20px] font-semibold text-gray-900"> 
           99/- </span>
         <span className="text-slate-400 line-through ">100/-</span>
         </div>
          <span className=" top-4 left-4 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
  20% OFF
</span>
          <QuantitySelector />
        </div>

        {/* Buttons Section */}
        <div className="flex gap-3">
          {/* Buy Now Button */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-full text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Buy Now
            <img src={BuyKnow} alt="Buy Now" className="h-5 w-5" />
          </button>

          {/* Add to Cart Button */}
          <a
            href="#"
            className="w-full text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};


