import React, { useEffect, useState } from 'react'
import './SidebarMenu.scss'
import {NavLink} from 'react-router-dom'
import SibarSubMenu from './SibarSubMenu'

const SidebarMenu = ({menu}) => {

    
    const [ isOpenSubMenu, setIsOpenSubMenu ] = useState(false)
    
    const {title,icon,iconClosed, iconOpened ,path,subMenu} = menu;
   
    const handleSubmenu = (e)=>{
        e.preventDefault()
        setIsOpenSubMenu(!isOpenSubMenu)
    }

    return (
        <li className='menu-container' >
            <NavLink 
                to={path}  
                onClick={ subMenu && handleSubmenu }
                activeClassName='active' 
            >
                <div className='menu-item-container' >
                    <div>{icon}</div>
                    <p>{title}</p>
                    <div>{ isOpenSubMenu ? iconOpened :iconClosed}</div>
                </div>
            </NavLink>
            {
                (subMenu )
                ? <SibarSubMenu 
                    isOpenSubMenu={isOpenSubMenu} 
                    subMenu={subMenu}
                    setIsOpenSubMenu={setIsOpenSubMenu} 
                   />
                : null
            }
        </li>
    )
}

export default React.memo( SidebarMenu )
