import { useState } from "react";

const Header = () => {
    const btnName = "Login";
    const [isLoggedIn, setIsLoggedIn] = useState(btnName);

    const handleLogin = () => {
        setIsLoggedIn(isLoggedIn === btnName ? "Logout" : btnName); 
    }

    return (
        <div className="header">
            <img 
                className="logo-img"
                src="https://imgs.search.brave.com/o4zMqbG18tJ40fXAaoPdXec-6E0mtWSPoLPmf5BvTsY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1IvcmVzdGF1/cmFudC1jaGllZi1m/b29kLWhvdGVsLWxv/Z28tOURFOUQwMzgx/Mi1zZWVrbG9nby5j/b20ucG5n"/>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                        <button className="login-btn" onClick={handleLogin}>{isLoggedIn}</button>
                    </ul>
                 </div>
            </div>
    )
}
export default Header;  