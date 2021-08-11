import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, Row, Col ,FormFeedback  } from 'reactstrap'
import { addMetrologicInfomation } from '../../../../../actions/patronesAction'
import { mostrarAlerta, validarCodigo, validarMetrologicos } from '../../../../../helpers'
import UseError from '../../../../../hooks/UseError'
import { UseForm } from '../../../../../hooks/UseForm'
import SpinnerCustom from '../../../../Spinner/SpinnerCustom'

let alert;
let mensaje;
const EquiposMetrologicos = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = UseError(5000)
    const dispatch = useDispatch();
    const initialState={
        codigo:'123',
        responsable:'',
        inferior:'30',
        superior:'20',
        valorNominal:'20',
        divisiondeEscala:'20',
        magnitud:'20',
        resolucion:'20',
        unidadDeMedida:'20',
        verificacion:'30',
        errorMaxPer:'30',
        calibracion:'30',
        trazabilidad:'20',       
        metrologia:true
    }
    const [formValues,handleOnChange] = UseForm(initialState);

    const {
        codigo,        
        inferior,
        superior,
        valorNominal,
        divisiondeEscala,        
        resolucion,
        unidadDeMedida,
        verificacion,
        calibracion,
        trazabilidad,       
        errorMaxPer
    }= formValues;

    const handleSubmit=async(e)=>{
        setLoading(true)
        e.preventDefault();

        //validar el codigo
        const codigoExiste = await dispatch(validarCodigo(codigo,'patrones'))
        if (!codigoExiste) {
            setError(true)
            mensaje='El Codigo no existe , primero ingresa los datos basicos'
            alert = mostrarAlerta(mensaje)
            setLoading(false)
            console.log('el codigo no existe')
            return
        }
        const metrologicosExiste = await dispatch(validarMetrologicos(codigo,'patrones'))
        if (metrologicosExiste) {
            setError(true)
            mensaje=`Los datos metrologicos del codigo ${codigo} ya existen`
            alert = mostrarAlerta(mensaje)
            setLoading(false)
            console.log(`los datos metrologicos del codigo ${codigo} ya existen`)
            return
        }
        //agregar los datos metrologicos a la base de datos
        //dispatch(addMetrologicInfomation(formValues))
        setLoading(false)
    }

    const handleOnBlur =async()=>{
        const codigoExiste = await dispatch(validarCodigo(codigo,'patrones'))
        if (!codigoExiste) {
            setError(true)
            mensaje='El Codigo no existe , primero ingresa los datos basicos'
            return
        }       
    }
    return (
        <>
        <h2 className='text-center mt-3'>Ingreso Datos Metrologícos Equipos</h2>
        <Form
            className='form-container'
            onSubmit={handleSubmit}
        >
            <Row form>
                <Col md={4} >
                    <FormGroup>
                        <Label>Codigo</Label>
                        <Input
                            type='text'
                            name='codigo'
                            onChange={handleOnChange}
                            onBlur={handleOnBlur}
                            value={codigo}
                            invalid={error}
                        />
                        <FormFeedback >{mensaje}</FormFeedback>
                    </FormGroup>
                </Col>
               
            </Row>
            <Row form >
                <Col md={4} >
                        <h4>Intervalo de Medida</h4>
                        <FormGroup>
                            <Label>Inferior</Label>
                            <Input 
                                type='text'
                                name='inferior'
                                onChange={handleOnChange}
                                value={inferior} 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Superior</Label>
                            <Input 
                                type='text'
                                name='superior'
                                onChange={handleOnChange}
                                value={superior} 
                            />
                        </FormGroup>
                       
                </Col>
                <Col md={4} >                    
                    <h4>Exactitud</h4>                  
                    <FormGroup>
                        <Label>Tolerancia del proceso</Label>
                        <Input
                            type='text'
                            name='divisiondeEscala'
                            onChange={handleOnChange}
                            value={divisiondeEscala}
                        />
                    </FormGroup>                                        
                    <FormGroup>
                        <Label>Error max. Permitido</Label>
                        <Input
                            type='text'
                            name='errorMaxPer'
                            onChange={handleOnChange}
                            value={errorMaxPer}
                        />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <h4>Frecuencias</h4>
                    <FormGroup>
                        <Label>Verificación</Label>
                        <Input 
                            type="select"
                            name='verificacion'
                            onChange={handleOnChange}
                            value={verificacion}
                        >
                            <option>Default Select</option>
                            <option>2</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Calibración</Label>
                        <Input 
                            type="select"
                            name='calibracion'
                            onChange={handleOnChange}
                            value={calibracion}
                        >
                            <option>Default Select</option>
                            <option>1</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row form >
                <Col md={4}>
                <h4>Tipo de Servicio</h4>
                    <FormGroup>
                        <Label>Verificación</Label>
                        <Input 
                            type="select"
                            name='verificacion'
                            onChange={handleOnChange}
                            value={verificacion}
                        >
                            <option>Default Select</option>
                            <option>2</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
                {error && alert}
            <Row>
            <Col md={12} md={{offset:4 , size:4 } }>
                <Button
                    block
                    color='primary'
                >Ingresar</Button>                
            </Col>
            </Row>
            {loading && <SpinnerCustom />}
        </Form>   
        </>
    )
}

export default EquiposMetrologicos
