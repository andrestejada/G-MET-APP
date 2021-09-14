import React from 'react'
import { Route ,Switch, useRouteMatch } from 'react-router'
import EquiposBasicos from '../components/app/Container/pages/equipos/EquiposBasicos'
import EquiposMetrologicos from '../components/app/Container/pages/equipos/EquiposMetrologicos'


const EquiposRoutes = () => {
    const {path} =useRouteMatch()
    return (
        <Switch>
            <Route exact path={`${path}/basicos`}  component={EquiposBasicos} />
            <Route exact path={`${path}/metrologicos`} component={ EquiposMetrologicos }/>
        </Switch>
    )
}

export default EquiposRoutes
