
import Footer from "./components/Footer"
import Navbar from "./components/NavBar"
import Cust_Details from "./pages/Cust_Details"
import Home from "./pages/Home"
import ShoppingCart from "./pages/ShoppingCart"




function App() {
  return (
    <div className="bg-green-100">
      <Navbar/>

  
      
      <div className="h-20  bg-green-100"></div>
      <Cust_Details/>
      
      <Footer/>
    </div>
  )
}

export default App
