import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {

    const navigate = useNavigate()
    const [menu, setMenu] = useState("Home")
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext)

    const handleLogout = () => {
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
    }

    return (
        <nav className='navbar'>
            <h1 
                className='navbar-logo'
                alt='logo'
                onClick={() => navigate("/")}
            >
                Winil Food
            </h1>
            <ul className='navbar-menu'>
                <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>
                    <a href='#'>Home</a>
                </li>
                <li onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>
                    <a href='#explore-menu'>Menu</a>
                </li>
                <li onClick={() => setMenu("About-Us")} className={menu === "About-Us" ? "active" : ""}>
                    <a href='#app-download'>About Us</a>
                </li>
                <li onClick={() => setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}>
                    <a href='#footer'>Contact Us</a>
                </li>
            </ul>
            <div className='navbar-right'>
                <div className='navbar-search-icon'>
                    <img
                        src={assets.basket_icon} alt='basket icon'
                        onClick={() => navigate("/cart")}
                    />
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                {!token ? <button onClick={() => setShowLogin(true)}>Sign In</button> : (
                    <div className='navbar-profile'>
                        <img src={assets.profile_icon} alt='profile' />
                        <ul className='navbar-profile-dropdown'>
                            <li onClick={() => navigate("/myorders")}><p>Orders</p></li>
                            <hr />
                            <li onClick={handleLogout}><p>Logout</p></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar