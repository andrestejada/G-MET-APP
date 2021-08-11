import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import SpinnerCustom from '../Spinner/SpinnerCustom'
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import styled from 'styled-components'
import { registerWithEmailAndPassword } from '../../actions/authActions'
import { mostrarAlerta } from '../../helpers/mostrarAlerta'
import { UseForm } from '../../hooks/UseForm'
import RegistroExitoso from './RegistroExitoso'

const ContainerRegister=styled.div`
    max-width: 700px;
    margin: 0 auto;
    padding: 1em 2em;
    height: 79vh;

    @media (max-width:767px){
        height: 100%;
    }
`
let alerta 

const MainRegister = () => {
    const [error, setError] = useState(false);
    const [register,  setRegister] = useState(false)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    //formulario
    const initialState={
        nombre:'luis',
        apellido:'tejada',
        empresa:'mayaguez',
        email:'luis@correo.com',
        password1:'123456',
        password2:'123456',
        //nombreCompleto:`${this.nombre} ${this.apellido}`
    };
    const [formValues,handleOnchange]=UseForm(initialState);
    const {nombre,
        apellido,
        empresa,
        email,
        password1,
        password2}= formValues;

    const handleSubmitRegister=async(e)=>{
        e.preventDefault();
        if(nombre.trim()===''||apellido.trim()===''||empresa===''||email===''||password1===''||password2===''){
            setError(true)
            alerta = mostrarAlerta('Todos los campos son obligatorios')
            setTimeout(()=> setError(false) ,2000)
            return
        }

        if(password1.length < 6){
            setError(true)
            alerta = mostrarAlerta('La contraseña debe tener mas de 6 caracteres')
            setTimeout(()=> setError(false) ,2000)
            return
        }
        if(password1 !== password2){
            setError(true)
            alerta = mostrarAlerta('las contraseñas deben ser iguales')
            setTimeout(()=> setError(false) ,2000)
            return
        }

        setLoading(true)
        const registro = await dispatch( registerWithEmailAndPassword(formValues) );
        if(registro ==='registro exitoso'){
          setRegister(true)
          return
        }
                
    }
    if(register){
      return <RegistroExitoso/>
    }
  return (
    <ContainerRegister >
        <h2>Regístrate</h2>
        <hr/>
      <Form
        onSubmit={handleSubmitRegister}
      >
      <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for='exampleEmail'>Nombre</Label>
              <Input
                type='text'
                name='nombre'
                placeholder='Nombre'
                value={nombre}
                onChange={handleOnchange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='examplePassword'>Apellido</Label>
              <Input
                type='text'
                name='apellido'
                placeholder='Apellido'
                value={apellido}
                onChange={handleOnchange}
              />
            </FormGroup>
          </Col>
        </Row>
      <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for='exampleEmail'>Email</Label>
              <Input
                type='email'
                name='email'
                placeholder='correo@correo.com'
                value={email}
                onChange={handleOnchange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='examplePassword'>Empresa</Label>
              <Input
                type='text'
                name='empresa'
                placeholder='Empresa'
                value={empresa}
                onChange={handleOnchange}
              />
            </FormGroup>
          </Col>
        </Row>
      <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for='exampleEmail'>Contraseña</Label>
              <Input
                type='password'
                name='password1'
                placeholder='******'
                value={password1}
                onChange={handleOnchange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='examplePassword'>Repetir Contraseña</Label>
              <Input
                type='password'
                name='password2'
                placeholder='******'
                value={password2}
                onChange={handleOnchange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
            <Button
                type='submit'
                color='primary'
                block
                disabled={loading}
            >Registrarse</Button>
        </Row>
        {
          loading && <SpinnerCustom color='success' />
        }
        {
            error && alerta
        }
      </Form>
    </ContainerRegister>
  )
}

export default MainRegister
