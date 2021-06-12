import React from 'react'
import MainContainer from '../Container/MainContainer'
import NavbarMenu from './layout/Navbar/Navbar'
import Sidebar from './layout/Sidebar/Sidebar'
import './Dashboard.scss'



const Dashboard = () => {
    return (
        <div className='dashboard-container' >
            <Sidebar/>
            <div className='main-container' >
                <NavbarMenu/>
                <MainContainer/>
            </div>
        </div>
    )
}

export default Dashboard
