import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  Navbar, NavbarToggler, NavbarBrand,   } from 'reactstrap';
import { toggleMenuAction } from '../../../../../actions/uiActions';
import Logo from '../../../../logo/Logo';
import {Avatar} from './Avatar/Avatar';



const NavbarMenu = () => {
  const dispatch = useDispatch()
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
    dispatch( toggleMenuAction(collapsed) )
  }

  return (
    <div className='sticky-top' >
      <Navbar color='navbar' dark >
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        
        <NavbarBrand href="/dashboard" className="mr-auto">
          <Logo
            width='50'
          />
        </NavbarBrand>
        <Avatar/>
      </Navbar>
    </div>
  );
}

export default NavbarMenu;