import React ,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, Row, Col ,FormFeedback } from 'reactstrap'
import { validarCamposVacios,validarCodigo ,mostrarAlerta } from '../../../../../helpers'
import { UseForm } from '../../../../../hooks/UseForm'
import UseError from '../../../../../hooks/UseError'
import SpinnerCustom from '../../../../Spinner/SpinnerCustom'
import { createNewPattern } from '../../../../../actions/patronesAction'
import { ResponsablesList } from '../configuraciones/Responsables/ResponsablesList'
import { UbicacionesList } from '../configuraciones/Ubicaciones/UbicacionesList'
let alert

const PatronesBasicos = () => {
  const dispatch = useDispatch()
  const initialState = {
    codigo: '123',
    modelo: '456',
    serie: '789',
    ubicacion: 'maquina1',
    marca: 'marca1',
    descripcion: 'esta es una maquina de prueba',
    responsable: 'luis tejada'
  }

  const [formValues, handleInputChange] = UseForm(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = UseError(5000)

  const {
    marca,
    codigo,
    modelo,
    serie,
    ubicacion,
    descripcion,
    responsable
  } = formValues

  const handleOnSubmit = async e => {
    setLoading(true)
    e.preventDefault()

    //validar si los campos estan vacios
    const validar = validarCamposVacios(formValues)
    if (validar) {
      setError(true)
      setLoading(false)
      alert = mostrarAlerta('Todos los campos son obligatorios')
      return
    }

    //validar el codigo
    const codigoExiste = await dispatch(validarCodigo(codigo,'patrones'))
    if (codigoExiste) {
        setError(true)
        alert = mostrarAlerta('El Codigo ya existe')
        setLoading(false)
        console.log('el codigo ya existe')
      return
    }
    //se envia el formulario a la base de datos
    await dispatch(createNewPattern(formValues))
    setLoading(false)
  }

  const handleOnBlur =async()=>{
    const codigoExiste = await dispatch(validarCodigo(codigo,'patrones'))
    if (codigoExiste) {
      setError(true)
      return
    }    
  }
    return (
        <>
        <h2 className='text-center mt-3'>Ingreso de Patrones Basicos</h2>
        <Form onSubmit={handleOnSubmit} className='form-container'>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label>Codigo</Label>
                <Input
                  onChange={handleInputChange}
                  onBlur={handleOnBlur}
                  value={codigo}
                  type='text'
                  name='codigo'
                  placeholder='Codigo'
                  autoFocus
                  invalid={error}
                />
                <FormFeedback >El codigo ya existe, Intenta con otro</FormFeedback>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Descripcion</Label>
                <Input
                  onChange={handleInputChange}
                  value={descripcion}
                  type='text'
                  name='descripcion'
                  placeholder='Descripcion'
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Marca</Label>
                <Input
                  onChange={handleInputChange}
                  value={marca}
                  type='text'
                  name='marca'
                  placeholder='marca'
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label>Modelo</Label>
                <Input
                  onChange={handleInputChange}
                  value={modelo}
                  type='text'
                  name='modelo'
                  placeholder='modelo'
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Serie</Label>
                <Input
                  onChange={handleInputChange}
                  value={serie}
                  type='text'
                  name='serie'
                  placeholder='serie'
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Ubicacion</Label>
                <Input
                  onChange={handleInputChange}
                  value={ubicacion}
                  type='select'
                  name='ubicacion'
                  placeholder='ubicacion'
                >
                  <option  selected hidden >Selecciona un responsable</option>
                  <UbicacionesList/>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label>Responsable</Label>
                <Input
                  onChange={handleInputChange}
                  value={responsable}
                  type='select'
                  name='responsable'
                  placeholder='Responsable'
                >
                  <option  selected hidden >Selecciona un responsable</option>
                  <ResponsablesList/>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Col md={4}>
            <Button block color='primary' type='submit' disabled={loading||error}>
              Ingresar
            </Button>
          </Col>
          {loading && <SpinnerCustom />}
          {error && alert}
        </Form>
      </>
    )
}

export default PatronesBasicos
