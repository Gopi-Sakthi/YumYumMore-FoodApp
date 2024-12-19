import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import "./index.css"
import appStore from "./utils/appStore";
import Footer from "./components/Footer";
import OrderHistory from "./components/OrderDetails";
import OrderDetails from "./components/OrderDetails";

const App = () => {
  return(
    <Provider store={appStore}>
      <div className="">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </Provider>
  )
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/about",
          element:<About />
        },
        {
        path:"/contact",
        element:<Contact/>
        },
        {
          path:"/Cart",
          element:<Cart/>
        },
        {
          path:"/restaurants/:resId",
          element:<RestaurantMenu/>
        }
        ,{
          path:"/OrderDetails",
          element:<OrderDetails/>
        }
    ],
    errorElement:<Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);