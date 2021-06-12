import React from 'react';
import {
  Navbar,
  NavbarBrand,
  
} from 'reactstrap';

const LoginNav = () => {
    
  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">METRO-APP</NavbarBrand>
      </Navbar>
    </>
  );
}

export default LoginNav;