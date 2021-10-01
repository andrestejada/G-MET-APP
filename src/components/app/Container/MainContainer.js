import React from 'react'
import {Route,Switch,useRouteMatch} from 'react-router-dom'
import './MainContainer.scss'
import Configuraciones from '../../../routes/ConfiguracionesRoutes'
import Reportes from './Reportes'
import EquiposRoutes from '../../../routes/EquiposRoutes'
import ConsultasRoutes from '../../../routes/ConsultasRoutes'
import PatronesRoutes from '../../../routes/PatronesRoutes'
import ProgramacionRoutes from '../../../routes/ProgramacionRoutes'


const MainContainer = () => {
    const {path} = useRouteMatch();
  
    return (
            <main>
                <Switch>
                    <Route path='/dashboard/reportes' exact component={Reportes}/>
                    <Route path={`${path}/equipos`} component={EquiposRoutes}/>
                    <Route path={`${path}/patrones`} component={PatronesRoutes}/>
                    <Route path={`${path}/consultas`} component={ConsultasRoutes}/>      
                    <Route path={`${path}/configuraciones`} component={Configuraciones}/>
                    <Route path={`${path}/programacion`} component={ProgramacionRoutes}/>
                </Switch>
            </main>
        
    )
}

export default MainContainer
