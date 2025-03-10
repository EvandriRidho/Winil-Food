import React from 'react'
import './Footer.css'
import { assets } from "../../assets/frontend_assets/assets"

const Footer = () => {
    return (
        <footer className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <h1
                        className='footer-logo'
                        alt='logo'
                        onClick={() => navigate("/")}
                    >
                        Winil Food
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='footer-social-icons'>
                        <img
                            src={assets.facebook_icon}
                            alt="facebook icon"
                        />
                        <img
                            src={assets.twitter_icon}
                            alt="twitter icon"
                        />
                        <img
                            src={assets.linkedin_icon}
                            alt="linkedin icon"
                        />
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+62888-8888-8888</li>
                        <li>WinilSantos@elgasing.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>&copy; 2025 Winil Food. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer