import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const RegisterSuccessContainer=styled.div`
    width: 100%;
    height: 79vh;
    display: flex;
    justify-content: center;
    align-items: center;

`
const RegistroExitoso = () => {
    let history = useHistory();
    const irIniciarSeccion=()=>{
        history.push('/login')
    }
    return (
        <RegisterSuccessContainer>
            <Jumbotron>
                <h2 className="display-3">Registro Exitoso</h2>
                <p className="lead">Para Iniciar sección en nuestra plataforma preciosa el siguiente botón</p>
                <hr className="my-2" />
                <Button 
                    color="primary"
                    type='button'
                    onClick={ irIniciarSeccion }
                >
                    Iniciar sección 
                </Button>               
            </Jumbotron>
        </RegisterSuccessContainer>
    )
}

export default RegistroExitoso
