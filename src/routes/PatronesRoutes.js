import React from 'react'
import { Route ,Switch, useRouteMatch } from 'react-router'
import PatronesMetrologicos from '../components/app/Container/pages/patrones/PatronesMetrologicos'
import PatronesBasicos from '../components/app/Container/pages/patrones/PatronesBasicos'


const PatronesRoutes = () => {
    const {path} =useRouteMatch()
    return (
        <Switch>
            <Route exact path={`${path}/basicos`} component={PatronesBasicos}/>
            <Route exact path={`${path}/metrologicos`} component={PatronesMetrologicos}/>
        </Switch>
    )
}

export default PatronesRoutes
