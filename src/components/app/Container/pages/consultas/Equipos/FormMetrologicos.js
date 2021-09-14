import React from 'react'
import {
    Row,
    Col,
    Input,
    Label,
    FormGroup,
  } from 'reactstrap';
const FormMetrologicos = ({handleInputChange,disabled,values}) => {
    const {
        inferior,
        superior,
        divisiondeEscala,
        resolucion,
        unidadDeMedida,
        verificacion,
        calibracion,
        trazabilidad,
        errorMaxPer,
        servicio,
        tolerancia
    }=values
    return (
        <>
        <h3 className='text-center' >Datos Metrologicos</h3>
        <hr/>       
        <Row form >
                <Col md={4} >
                        <h4>Intervalo de Medida</h4>
                        <FormGroup>
                            <Label>Inferior</Label>
                            <Input 
                                type='text'
                                name='inferior'
                                value={inferior}
                                onChange={handleInputChange}
                                disabled={disabled} 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Superior</Label>
                            <Input 
                                type='text'
                                name='superior'
                                value={superior}
                                onChange={handleInputChange}
                                disabled={disabled} 
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
                                    value={divisiondeEscala}
                                    onChange={handleInputChange}
                                    disabled={disabled}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6} >
                            <FormGroup>
                                <Label>Magnitud</Label>
                                <Input 
                                    type="select"
                                    name='magnitud'
                                    onChange={handleInputChange}
                                    disabled={disabled}            
                                >   
                                    <option selected hidden disabled >Seleccione una magnitud</option>
                                    <option value='30'>30</option>
                                    <option value='40'>40</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}  >
                            <FormGroup>
                                <Label>Resolución</Label>
                                <Input
                                    type='text'
                                    name='resolucion'
                                    value={resolucion}
                                    onChange={handleInputChange}
                                    disabled={disabled}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6} >
                            <FormGroup>
                                <Label>Unidad de medida</Label>
                                <Input 
                                    type="select"
                                    name='unidadDeMedida'
                                    value={unidadDeMedida}
                                    onChange={handleInputChange}
                                    disabled={disabled}
                                >
                                    <option>Default Select</option>
                                    <option>mts</option>
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
                            value={verificacion}
                            onChange={handleInputChange}
                            disabled={disabled}
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
                            value={calibracion}
                            onChange={handleInputChange}
                            disabled={disabled}
                        >
                            <option>Default Select</option>
                            <option>1</option>
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
                            value={errorMaxPer}
                            onChange={handleInputChange}
                            disabled={disabled}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Tolerancia al Proceso</Label>
                        <Input
                            type='text'
                            name='tolerancia'
                            onChange={handleInputChange}
                            disabled={disabled}
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
                            onChange={handleInputChange}
                            disabled={disabled}
                            checked={ servicio === 'externo' && true }
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
                            onChange={handleInputChange}
                            disabled={disabled}
                            checked={ servicio === 'interno' && true }
                        />
                        Interno
                        </Label>
                    </FormGroup>                         
                </Col>
               
            </Row>  
        </>
    )
}

export default FormMetrologicos
