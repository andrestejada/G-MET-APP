import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '../components/login/Login'
import DashBoardRoutes from './DashBoardRoutes'

const AppRoutes = () => {
    return (
 
        <Router>

            <Switch>
                <Route exact path='/login' component={ Login } />
                <Route  path='/' component={ DashBoardRoutes } />
            </Switch>
      
      </Router>
    )
}

export default AppRoutes
