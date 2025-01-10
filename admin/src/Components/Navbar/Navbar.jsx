import React from 'react'
import './Navbar.css'
import { assets } from "../../assets/assets"

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 className='logo'>
                Winil Food
            </h1>
            <img
                className='profile'
                src={assets.profile_image}
                alt='profile'
            />
        </nav>
    )
}

export default Navbar