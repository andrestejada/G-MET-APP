import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { UseForm } from '../../hooks/UseForm'
import { Alert } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { signInAction } from '../../actions/authActions';

const LoginForm = () => {
  const dispatch = useDispatch();
  
  const [error, setError] = useState(false)  

  const initialState = {
    email: 'andres@correo.com',
    password: '123456'
  }
  const [formValues, handleOnchange] = UseForm(initialState)

  const { email, password } = formValues;


  const handleSubmitLogin =(e)=>{
    e.preventDefault();

    if(email.trim()===''||password.trim()===''){
      setError(true)
      setTimeout(()=>{
        setError(false)
      },2000)
      return;
    }
    dispatch( signInAction(email,password) ) 
  }

  return (
    <>
    
    <div className='login-form-container'>
      
      <Form
        onSubmit={handleSubmitLogin}
      >
        <h2>Iniciar Seccion </h2>
        <FormGroup>
          <Label for='exampleEmail'>Usuario</Label>
          <Input 
            type='email'  
            name='email'
            value={email} 
            placeholder='email@correo.com'
            onChange={handleOnchange} 
        />
        </FormGroup>
        <FormGroup>
          <Label for='exampleEmail'>Contraseña</Label>
          <Input 
            type='password' 
            name='password'
            value={password} 
            placeholder='******'
            onChange={handleOnchange} 
        />
        </FormGroup>
        <Button className='w-100' color='primary' type='submit'>
          Iniciar Seccion
        </Button>
        {
          error && <Alert className='mt-3' color='danger'>Todos los campos son obligatorios</Alert>
        }
      </Form>
    </div>
    </>
  )
}

export default LoginForm
