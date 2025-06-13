import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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




const resList =[
  {
    "id": 1,
    "name": "The Spice Route",
    "description": "Authentic Indian flavors with a modern twist.",
    "rating": 4.6,
    "deliveryTime": 30,
    "img": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
  },
  {
    "id": 2,
    "name": "Burger Bliss",
    "description": "Juicy gourmet burgers with hand-cut fries.",
    "rating": 4.2,
    "deliveryTime": 25,
    "img": "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    "id": 3,
    "name": "Sushi Zen",
    "description": "Fresh sushi rolls and sashimi delivered daily.",
    "rating": 4.8,
    "deliveryTime": 40,
    "img": "https://images.unsplash.com/photo-1553621042-f6e147245754"
  },
  {
    "id": 4,
    "name": "Pasta Parade",
    "description": "Homemade pasta and Italian comfort food.",
    "rating": 4.4,
    "deliveryTime": 35,
    "img": "https://images.unsplash.com/photo-1589308078053-0f4e8b0a6d4b"
  },
  {
    "id": 5,
    "name": "Vegan Vibes",
    "description": "100% plant-based meals bursting with flavor.",
    "rating": 4.7,
    "deliveryTime": 28,
    "img": "https://images.unsplash.com/photo-1542444459-db1a7b6b2c2d"
  },
  {
    "id": 6,
    "name": "Tandoori Tikka",
    "description": "Grilled tandoori delicacies and spicy curries.",
    "rating": 4.5,
    "deliveryTime": 32,
    "img": "https://images.unsplash.com/photo-1604908177521-3e8b2b1d6a1a"
  },
  {
    "id": 7,
    "name": "Wok This Way",
    "description": "Stir-fried Asian street food, fast and fresh.",
    "rating": 4.3,
    "deliveryTime": 22,
    "img": "https://images.unsplash.com/photo-1604908177521-3e8b2b1d6a1a"
  },
  {
    "id": 8,
    "name": "Crust & Crumb",
    "description": "Artisan pizzas with handcrafted dough and toppings.",
    "rating": 4.1,
    "deliveryTime": 27,
    "img": "https://images.unsplash.com/photo-1604908177521-3e8b2b1d6a1a"
  },
  {
    "id": 9,
    "name": "Chai Junction",
    "description": "India's favorite tea spot with snacks and bites.",
    "rating": 4.0,
    "deliveryTime": 15,
    "img": "https://images.unsplash.com/photo-1604908177521-3e8b2b1d6a1a"
  },
  {
    "id": 10,
    "name": "Hearty Bowls",
    "description": "Wholesome rice, salad, and noodle bowls.",
    "rating": 4.3,
    "deliveryTime": 20,
    "img": "https://images.unsplash.com/photo-1604908177521-3e8b2b1d6a1a"
  }
]
 






const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);