import React from 'react'
import {Route,Switch} from 'react-router-dom'
import './MainContainer.scss'
import Equipos from './pages/consultas/Equipos'
import Patrones from './pages/consultas/Patrones/Patrones'
import EquiposBasicos from './pages/equipos/EquiposBasicos'
import EquiposMetrologicos from './pages/equipos/EquiposMetrologicos'
import PatronesBasicos from './pages/patrones/PatronesBasicos'
import PatronesMetrologicos from './pages/patrones/PatronesMetrologicos'
import Reportes from './Reportes'


const MainContainer = () => {
    return (
            <main>
                <Switch>
                    <Route path='/dashboard/reportes' exact component={Reportes}/>
                    <Route path='/dashboard/equipos/basicos' exact component={EquiposBasicos}/>
                    <Route path='/dashboard/equipos/metrologicos' exact component={EquiposMetrologicos}/>
                    <Route path='/dashboard/patrones/basicos' exact component={PatronesBasicos}/>
                    <Route path='/dashboard/patrones/metrologicos' exact component={PatronesMetrologicos}/>
                    <Route path='/dashboard/consultas/Equipos' exact component={Equipos}/>
                    <Route path='/dashboard/consultas/Patrones' exact component={Patrones}/>
                </Switch>
            </main>
        
    )
}

export default MainContainer
