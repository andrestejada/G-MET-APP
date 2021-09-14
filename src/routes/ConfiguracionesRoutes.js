import React from 'react'
import { Route ,Switch, useRouteMatch } from 'react-router'
import Frecuencia from '../components/app/Container/pages/configuraciones/Frecuencias/Frecuencia'
import Magnitud from '../components/app/Container/pages/configuraciones/Magnitud/Magnitud'
import Responsables from '../components/app/Container/pages/configuraciones/Responsables/Responsables'
import Ubicaciones from '../components/app/Container/pages/configuraciones/Ubicaciones/Ubicaciones'
import { Umedida } from '../components/app/Container/pages/configuraciones/UnidadDeMedida/Umedida'


const Configuraciones = () => {
    const {path} = useRouteMatch()
    return (
        <>
            <Switch>
                <Route path={`${path}/responsables`} exact component={Responsables}/>
                <Route path={`${path}/ubicaciones`} exact component={Ubicaciones}/>
                <Route path={`${path}/unidad-medida`} exact component={Umedida}/>
                <Route path={`${path}/magnitud`} exact component={Magnitud}/>
                <Route path={`${path}/frecuencias`} exact component={Frecuencia}/>
            </Switch>
        </>
    )
}

export default Configuraciones
