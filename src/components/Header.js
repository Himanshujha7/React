import { useState , useEffect, use} from "react";
import { Link } from "react-router";

const Header = () => {
    const btnName = "Login";
    const [isLoggedIn, setIsLoggedIn] = useState(btnName);

    const handleLogin = () => {
        setIsLoggedIn(isLoggedIn === btnName ? "Logout" : btnName); 
    }

    useEffect(() => {
        console.log("useEffect called");
    });


    return (
        <div className="flex items-center justify-between  p-8  shadow-xl  sticky top-0 h-[75px] rounded-md bg-gray-50 ">
            <div className="flex items-center justify-center p-2 gap-4">
                <img 
                className="w-15 h-15 rounded-full"
                src="https://imgs.search.brave.com/o4zMqbG18tJ40fXAaoPdXec-6E0mtWSPoLPmf5BvTsY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1IvcmVzdGF1/cmFudC1jaGllZi1m/b29kLWhvdGVsLWxv/Z28tOURFOUQwMzgx/Mi1zZWVrbG9nby5j/b20ucG5n"/>
                <h3 className="text-3xl font-semibold text-orange-800 cursor-pointer font-coolvetica hover:text-orange-700">Ginger.</h3>
            </div>
            <div className="nav-items">
                <div className="no-link style">
                    <ul className="flex items-center justify-center space-x-4 font-sans font-medium ">
                        <li className="link-hover"><Link to="/">Home</Link></li>
                        <li className="link-hover"><Link to="/about">About Us</Link></li>
                        <li className="link-hover"><Link to= "/contact">Contact Us</Link></li>
                        <li className="link-hover"><Link to ="/cart">Cart</Link></li>
                        <li className="link-hover"><Link to ="/Grocery">Grocery</Link></li>
                        <button className="bg-green-600 px-6 py-2 text-amber-50 font-bold rounded-lg cursor-pointer transition duration-300 hover:bg-green-700" onClick={handleLogin}>{isLoggedIn}</button>
                    </ul>
                 </div>
            </div>
        </div>
    )
}

export default Header;  