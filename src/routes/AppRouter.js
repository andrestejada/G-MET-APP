import React, { useEffect ,useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route    
  } from 'react-router-dom';

import {PublicRoute} from './PublicRoute'
import {PrivateRoute} from './PrivateRoute'
import Login from '../components/Login/Login';
import Dashboard from '../components/app/Dashboard/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import Register from '../components/Register/Register';
import { auth } from '../firebase/firebase-config';
import { getUserProfile, loginSuccess} from '../actions/authActions';
import SpinnerScreen from '../components/Spinner/SpinnerScreen';



const AppRouter = () => {
    const dispatch = useDispatch();
    const {isAuth} = useSelector(state => state.auth)
    const [ checking, setChecking ] = useState(true);

    useEffect(()=>{
        auth.onAuthStateChanged( async(user)=> {
            try {
                if (user?.uid) {
                    const profile = await getUserProfile(user.uid , user.displayName)
                    dispatch( loginSuccess(profile) )
                    setChecking(false)
                  // User is signed in.
                } else {
                  // No user is signed in.
                  console.log(user)
                }
                setChecking(false)      
            } catch (error) {
                console.log(error)
            }
          });
    },[dispatch,setChecking]);

    if(checking){
        return (<SpinnerScreen/>)
    }

    return (
        <Router>
        <div>
            <Switch>
                <PublicRoute 
                    path="/login"
                    component={ Login }
                    isAuthenticated={ isAuth }
                />
                <Route
                    exact 
                    path="/registro"
                    component={ Register }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuth }
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
