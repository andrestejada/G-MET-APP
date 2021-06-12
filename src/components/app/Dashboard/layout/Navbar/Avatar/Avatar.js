import React ,{useState}from 'react';
import { useDispatch } from 'react-redux';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { signOutAction } from '../../../../../../actions/authActions';
import Profile from '../../../../../../assets/foto-perfil.jpg'
import './Avatar.scss'

export const Avatar = () => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  
  const dispatch = useDispatch()
  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className='p-0 d-flex justify-content-center align-items-center' color='transparent' >
          <div className='profile-box' >
              <img src={Profile} alt='perfil' />
          </div>
          <span className='ml-3 text-white'>Andres</span>
      </DropdownToggle>
      <DropdownMenu right >
        <DropdownItem header>Bienvenido Andres</DropdownItem>
        <DropdownItem>Mi Perfil</DropdownItem>
        <DropdownItem divider />
        <DropdownItem
          onClick={ ()=>dispatch(signOutAction()) }
        >Cerrar Seccion</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}