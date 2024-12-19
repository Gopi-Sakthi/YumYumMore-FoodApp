import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
const Header = () =>{

    //subscribing to the store
    const cartItems=useSelector((store)=>store.cart.items);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);


    return (
      <div className="flex justify-between items-center border bg-blue-200 font-medium h-[100px]">
        <div>   
             <img className="w-24 m-1 p-2" src="/assets/logo.jpg" alt="logo" />
        </div>
        <div  className="pr-20">
            <ul className="flex justify-evenly gap-28">
              <li className=""><Link to="/">Home</Link></li>
              <li className=""><Link to="/about">About</Link></li>
              <li className=""><Link to="/contact">Contact</Link></li>
              <li className=""><Link to="/cart"> {cartItems.length>0 && <span className="absolute px-9 text-red-600">{totalItems}</span>}Cart</Link></li>
              <li className=""><Link to="/OrderDetails">Orders</Link></li>
            </ul> 
        </div>
        
      </div>
    )
  }

  export default Header