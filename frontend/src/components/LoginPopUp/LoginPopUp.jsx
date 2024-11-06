import React, { useContext, useState } from 'react'
import "./LoginPopUp.css"
import { assets } from "../../assets/frontend_assets/assets"
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const LoginPopUp = ({ setShowLogin }) => {

    const { url, setToken } = useContext(StoreContext)

    const [currState, setCurrState] = useState("Login")
    const [data, setData] = useState({ name: "", email: "", password: "" })

    const handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        let newUrl = url;
        if (currState === "Login") {
            newUrl = `${url}/api/user/login`
        } else {
            newUrl = `${url}/api/user/register`
        }

        const response = await axios.post(newUrl, data)
        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
        } else {
            alert(response.data.message)
        }
    }

    return (
        <div className='login-popup'>
            <form className='login-popup-container' onSubmit={handleLogin}>
                <div className='login-popup-title'>
                    <h2>{currState}</h2>
                    <img
                        onClick={() => setShowLogin(false)}
                        src={assets.cross_icon}
                        alt='cross-icon'
                    />
                </div>
                <div className='login-popup-inputs'>
                    {currState === "Login" ? <></> :
                        <input
                            name='name'
                            onChange={handleOnChange}
                            value={data.name}
                            type='text'
                            placeholder='Your Name'
                            required
                        />}
                    <input
                        name='email'
                        onChange={handleOnChange}
                        value={data.email}
                        type='email'
                        placeholder='Email Address'
                        required
                    />
                    <input
                        name='password'
                        onChange={handleOnChange}
                        value={data.password}
                        type='password'
                        placeholder='Password'
                        required
                    />
                </div>
                <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className='login-popup-condition'>
                    <input
                        type='checkbox'
                        required
                    />
                    <p>By continuing, i agree to the Terms of us & privacy policy.</p>
                </div>
                {currState === "Login" ? (
                    <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here!</span></p>
                ) : (
                    <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here!</span></p>
                )}


            </form >
        </div >
    )
}

export default LoginPopUp