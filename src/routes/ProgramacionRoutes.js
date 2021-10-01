import React from 'react'
import { Route ,Switch, useRouteMatch } from 'react-router'
import ProgramacionEquipos from '../components/app/Container/pages/Programacion/Equipos/ProgramacionEquipos'



const ProgramacionRoutes = () => {
    const {path} =useRouteMatch()
    return (
        <Switch>
            <Route exact path={`${path}/equipos`} component={ProgramacionEquipos}/>
            <Route exact path={`${path}/patrones`} component={<p>patrones</p>}/>
        </Switch>
    )
}

export default ProgramacionRoutes