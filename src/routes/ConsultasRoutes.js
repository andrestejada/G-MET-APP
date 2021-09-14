import React from 'react'
import { Route ,Switch, useRouteMatch } from 'react-router'
import Equipos from '../components/app/Container/pages/consultas/Equipos/Equipos'
import Patrones from '../components/app/Container/pages/consultas/Patrones/Patrones'


const ConsultasRoutes = () => {
    const {path} =useRouteMatch()
    return (
        <Switch>
            <Route exact path={`${path}/equipos`} component={Equipos}/>
            <Route exact path={`${path}/patrones`} component={Patrones}/>
        </Switch>
    )
}

export default ConsultasRoutes
