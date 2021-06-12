import {auth} from '../firebase/firebase-config'
import { LOGIN_SUCCESS ,LOGOUT_SUCCESS} from '../types'

export const signInAction =(email,password)=>{
    return async(dispatch)=>{
        try {
            const {user} = await auth.signInWithEmailAndPassword(email, password)
            console.log(user)
            dispatch( loginSuccess(user) )
        } catch (error) {
            console.log(error)
        }
    }
}

const loginSuccess=(user)=>({
    type:LOGIN_SUCCESS,
    payload:user.uid
})

  
export const signOutAction =()=>{
    return async (dispatch)=>{
        await auth.signOut()
        dispatch( logout() )
    }
}

const logout =()=>({
    type:LOGOUT_SUCCESS
})