import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';

import {PublicRoute} from './PublicRoute'
import {PrivateRoute} from './PrivateRoute'
import Login from '../components/Login/Login';
import Dashboard from '../components/app/Dashboard/Dashboard';
import { useSelector } from 'react-redux';



const AppRouter = () => {
    const {isAuth} = useSelector(state => state.auth)
    return (
        <Router>
        <div>
            <Switch>
                <PublicRoute 
                    path="/login"
                    component={ Login }
                    isAuthenticated={ true }
                />

                <PrivateRoute 
                    isAuthenticated={ true }
                    path="/dashboard"
                    component={ Dashboard} 
                />

                <Redirect to="/login" />


            </Switch>
        </div>
    </Router>
    )
}

export default AppRouter
