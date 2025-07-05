import React, { lazy , Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import { Shimmer } from "./components/Shimmer";
import UserContext from "./utility/UserContext";
//jsx is not html in js
// const jsxheading = <h1> my name is himanshu in jsx</h1>

//Component Composition

// const HeaderComponent = (
//     <div id="title">
//         <h1 className="heading">my name is Himanshu in comp </h1>
//         <h2 className="heading">my name is Himanshu in comp </h2>
//         <h3 className="heading">my name is Himanshu in comp </h3>
//     </div>
// );




const Grocery = lazy(() => import("./components/Grocery") );




const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(() => {
    const data ={ 
      name: "Himanshu",
    };
    setUserName(data.name);
  },[])
    return (
      <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
        <div className="app">
            <Header/>  
          <Outlet/>
          <Footer/>
        </div>
      </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[{
      path:"/",
      element:<Body/>,
    },
      {
    path:"/about",
    element:<About/>,

    },{
    path:"/contact",
    element:<Contact/>,
    },
    {
    path:"/cart",
    element : <Cart/>,
    },
    {
    path:"/Grocery",
    element : <Suspense fallback = {<Shimmer/>}> <Grocery/></Suspense>,
    },
    {
    path:"/restaurant/:resId",
    element : <RestaurantMenu/>,
    }
    ],
    errorElement:<Error/>
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />  );