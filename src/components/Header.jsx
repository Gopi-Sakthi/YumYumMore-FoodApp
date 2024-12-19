import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
const Header = () =>{

    //subscribing to the store
    const cartItems=useSelector((store)=>store.cart.items);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
      <div className="flex justify-between items-center border font-medium h-[100px] bg-gradient-to-r from-blue-400 via-purple-400  to-pink-400 text-white">
        <div>   
             <img className="w-24 m-1 p-2 rounded-full" src="/assets/logo.jpg" alt="logo" />
        </div>
        <div  className="pr-20">
            <ul className="flex justify-evenly gap-28">
              <li className="hover:opacity-80"><Link to="/">Home</Link></li>
              <li className="hover:opacity-80"><Link to="/about">About</Link></li>
              <li className="hover:opacity-80"><Link to="/contact">Contact</Link></li>
              <li className="hover:opacity-80"><Link to="/cart"> {cartItems.length>0 && <span className="absolute pl-10 text-pretty ">{totalItems}</span>}Cart</Link></li>
              <li className="hover:opacity-80"><Link to="/OrderDetails">Orders</Link></li>
            </ul> 
        </div>
        
      </div>
    )
  }

  export default Header