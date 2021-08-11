import React from 'react'
import Footer from './Footer'
import LoginNav from './LoginNav'
import MainLogin from './MainLogin'
import SpinnerScreen from '../Spinner/SpinnerScreen' 
import './Login.scss'
import { useSelector } from 'react-redux'

const Login = () => {
    const {loading} = useSelector(state => state.auth)
    return (
        <>
        {loading ? <SpinnerScreen/> :null}
        <div className='login-container' >
         <LoginNav/>
         <MainLogin/>
         <Footer/>   
        </div>
        </>
    )
}

export default Login
