import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, Row, Col ,FormFeedback  } from 'reactstrap'
import { addMetrologicInfomation } from '../../../../../helpers'
import { mostrarAlerta, validarCodigo, validarMetrologicos } from '../../../../../helpers'
import UseError from '../../../../../hooks/UseError'
import { UseForm } from '../../../../../hooks/UseForm'
import SpinnerCustom from '../../../../Spinner/SpinnerCustom'
import { FrecuenciasList } from '../configuraciones/Frecuencias/FrecuenciasList'
import MagnitudList from '../configuraciones/Magnitud/MagnitudList'
import { UmedidaList } from '../configuraciones/UnidadDeMedida/UmedidaList'

let alert;
let mensaje;
const EquiposMetrologicos = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const [error, setError] = UseError(5000);
    const [cambiarMagnitud, setCambiarMagnitud] = useState('')
    const initialState={
        codigo:'123',
        inferior:'',
        superior:'',
        valorNominal:'',
        divisiondeEscala:'',
        magnitud:'',
        resolucion:'',
        unidadDeMedida:'',
        verificacion:'',
        errorMaxPer:'',
        calibracion:'',
        trazabilidad:'',       
        metrologicos:true,
        tolerancia:'',
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
        errorMaxPer,
        tolerancia,
        magnitud,
    }= formValues;

    const handleSubmit=async(e)=>{
        setLoading(true)
        e.preventDefault();

        //validar el codigo
        const codigoExiste = await dispatch(validarCodigo(codigo,'equipos'))
        if (!codigoExiste) {
            setError(true)
            mensaje='El Codigo no existe , primero ingresa los datos basicos'
            alert = mostrarAlerta(mensaje)
            setLoading(false)
            console.log('el codigo no existe')
            return
        }
        const metrologicosExiste = await dispatch(validarMetrologicos(codigo,'equipos'))
        if (metrologicosExiste) {
            setError(true)
            mensaje=`Los datos metrologicos del codigo ${codigo} ya existen`
            alert = mostrarAlerta(mensaje)
            setLoading(false)
            console.log(`los datos metrologicos del codigo ${codigo} ya existen`)
            return
        }
        //agregar los datos metrologicos a la base de datos
        dispatch(addMetrologicInfomation(formValues,'equipos'))
        setLoading(false)
    }

    const handleOnBlur =async()=>{
        const codigoExiste = await dispatch(validarCodigo(codigo,'equipos'))
        if (!codigoExiste) {
            setError(true)
            mensaje='El Codigo no existe , primero ingresa los datos basicos'
            return
        }       
    }

    const cambiarUmedida = e=>{
        handleOnChange(e)
        setCambiarMagnitud(e.target.value)
    }
    return (
        <>
        <h2 className='text-center mt-3'>Ingreso de los datos Metrologícos de los equipos</h2>
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
                <Col md={8} >                    
                    <h4>Caracteristicas Metrologicas</h4>
                    <Row form >
                        <Col md={6}  >
                            <FormGroup>
                                <Label>Division de Escala</Label>
                                <Input
                                    type='text'
                                    name='divisiondeEscala'
                                    onChange={handleOnChange}
                                    value={divisiondeEscala}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6} >
                            <FormGroup>
                                <Label>Magnitud</Label>
                                <Input 
                                    type="select"
                                    name='magnitud'
                                    onChange={cambiarUmedida}            
                                >   
                                    <option selected hidden >Seleccione una magnitud</option>
                                    <MagnitudList/>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}  >
                            <FormGroup>
                                <Label>Resolución</Label>
                                <Input
                                    type='text'
                                    name='resolucion'
                                    onChange={handleOnChange}
                                    value={resolucion}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6} >
                            <FormGroup>
                                <Label>Unidad de medida</Label>
                                <Input 
                                    type="select"
                                    name='unidadDeMedida'
                                    onChange={handleOnChange}
                                    value={unidadDeMedida}
                                >
                                    <option selected hidden >Seleccione una Unidad de medida</option>
                                    <UmedidaList
                                        cambiarMagnitud={cambiarMagnitud}
                                    />                                    
                                </Input>
                            </FormGroup>
                        </Col>
                       
                    </Row>
                </Col>
            </Row>

            <Row form >
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
                            <option selected hidden >Seleccione una Frecuencias</option>
                            <FrecuenciasList/>
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
                            <option selected hidden >Seleccione una Calibracion</option>
                           <FrecuenciasList/>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md={4} >
                <h4>Exactitud</h4>
                    <FormGroup>
                        <Label>Error max. Permitido</Label>
                        <Input
                            type='text'
                            name='errorMaxPer'
                            onChange={handleOnChange}
                            value={errorMaxPer}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Tolerancia al Proceso</Label>
                        <Input
                            type='text'
                            name='tolerancia'
                            onChange={handleOnChange}
                            value={tolerancia}
                        />
                    </FormGroup>
                </Col>          
                <Col md={4}>
                    <h4>Tipo de Servicio</h4>
                    <FormGroup check>
                        <Label check>
                        <Input 
                            type="radio" 
                            name="servicio"
                            value='externo'
                            onChange={handleOnChange}  
                        />
                        Externo
                        </Label>
                    </FormGroup>                         
                    <FormGroup check>
                        <Label check>
                        <Input 
                            type="radio" 
                            name="servicio"
                            value='interno'
                            onChange={handleOnChange} 
                        />
                        Interno
                        </Label>
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
