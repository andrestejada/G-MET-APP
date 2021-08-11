import React ,{useState}from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { signOutAction } from '../../../../../../actions/authActions';
import Profile from '../../../../../../assets/perfil.jpg'
import './Avatar.scss'

export const Avatar = () => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className='p-0 d-flex justify-content-center align-items-center' color='transparent' >
          <div className='profile-box' >
              <img src={Profile} alt='perfil' />
          </div>
          <span className='ml-3 text-white text-capitalize'>{user.nombre}</span>
      </DropdownToggle>
      <DropdownMenu right >
        <DropdownItem header className='text-capitalize' >Bienvenido {user.nombre}</DropdownItem>
        <DropdownItem>Mi Perfil</DropdownItem>
        <DropdownItem divider />
        <DropdownItem
          onClick={ ()=>dispatch(signOutAction()) }
        >Cerrar Seccion</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}