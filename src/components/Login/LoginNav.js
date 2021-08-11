import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import Logo from '../logo/Logo';


const LoginNav = () => {
    
  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">
          <Logo width='50'/>
        </NavbarBrand>
      </Navbar>
    </>
  );
}

export default LoginNav;