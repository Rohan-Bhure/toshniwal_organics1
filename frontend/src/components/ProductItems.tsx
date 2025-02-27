import { Star } from "lucide-react";

const ProductCard = () => {
  return (
   <div>
    <h1 className="text-4xl font-bold  flex justify-center text-gray-800 mt-6 mb-4  px-4 pb-2">
      <span className="border-b-4 border-green-900 p-3">Our Products</span>
    </h1>
    <h1 className="text-3xl font-bold  flex justify-center text-green-600 mt-6 mb-4  px-4 pb-2">
      <span className=" p-3">Organic fruits</span>
    </h1>
   <div className="grid grid-cols-4 gap-y-6   ">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
   </div>
   </div>
  );
};

export default ProductCard;

function Card(){
  return(
    <div className="w-full max-w-[330px] mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-white dark:border-gray-700">
    <a href="#">
      <img
        className="p-4 rounded-t-lg"
        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        alt="Apple Watch Series 7"
      />
    </a>
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
      </a>
      <div className="flex items-center mt-2.5 mb-5">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          {[...Array(4)].map((_, index) => (
            <Star key={index} className="w-4 h-4 text-yellow-300 fill-current" />
          ))}
          <Star className="w-4 h-4 text-gray-200 dark:text-gray-600 fill-current" />
        </div>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
          5.0
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 ">$599</span>
        <a
          href="#"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to cart
        </a>
      </div>
    </div>
  </div>
  )
}