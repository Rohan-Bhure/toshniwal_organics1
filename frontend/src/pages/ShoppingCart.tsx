import BuyCart from "../components/CartItem"
import OrderSummary from "../components/OrderSummary"


function ShoppingCart() {
  return (
    <div className="bg-green-100 ">
        <h1 className=" text-3xl text-center font-semibold mb-8 pt-8 border-spacing-1  " ><span className="border-b-[4px] border-green-800">Shoping</span></h1>
        <div className="flex justify-evenly">
            <div className=" flex flex-col gap-3 ">
            <BuyCart/>
          

            </div>
            <div>
            <OrderSummary/>

            </div>
        </div>
        
        
        
        <div className='h-20 bg-green-100'></div>
      
    </div>
  )
}

export default ShoppingCart
