import React from 'react'
import Footer from './Footer'
import LoginNav from './LoginNav'
import MainLogin from './MainLogin'
import './Login.scss'

const Login = () => {
    return (
        <div className='login-container' >
         <LoginNav/>
         <MainLogin/>
         <Footer/>   
        </div>
    )
}

export default Login
