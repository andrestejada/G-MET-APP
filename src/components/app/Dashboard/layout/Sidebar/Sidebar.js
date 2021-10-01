import React from 'react'
import { useSelector } from 'react-redux'
import Logo from '../../../../logo/Logo'
import './Sidebar.scss'
import { sidebarData } from './SidebarData'
import SidebarMenu from './SidebarMenu/SidebarMenu'


const Sidebar = () => {
    const {isCollapse} = useSelector(state => state.ui)

    return (
        <aside className={ isCollapse ? 'sidebar-collapse ':null } >
            <div className='logo-container'>
                <Logo
                    width='50'
                />
            </div>
            <ul>
                {
                    sidebarData.map( (menu,index)=>(
                        <SidebarMenu key={index} menu={menu}/>
                    ))
                }
            </ul>
        </aside>
    )
}

export default Sidebar
