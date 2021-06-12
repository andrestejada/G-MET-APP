import React from 'react'
import {Route,Switch} from 'react-router-dom'
import './MainContainer.scss'
import Reportes from './Reportes'


const MainContainer = () => {
    return (
            <main>
                <Switch>
                    <Route path='/dashboard/reportes' exact component={Reportes}/>
                </Switch>
            </main>
        
    )
}

export default MainContainer
