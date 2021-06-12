import React from 'react'
import {NavLink} from 'react-router-dom'
import './SidebarMenu.scss'

const SibarSubMenu = ({isOpenSubMenu,subMenu,setIsOpenSubMenu}) => {
  const noRender =()=>{
    setIsOpenSubMenu(true)
    console.log('se reanderizo denuevo')
  }

  return (
    <ul className={isOpenSubMenu ? '' : 'd-none'}>
      {subMenu.map((submenu, index) => (
        <li key={index} className='sub-menu-item'>
          <NavLink
            exact 
            to={submenu.path}
            role='button'
            onClick={ noRender } 
          >
            {submenu.title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default React.memo( SibarSubMenu)
