import {auth , db} from '../firebase/firebase-config'
import { LOGIN_SUCCESS ,LOGOUT_SUCCESS, START_LOADING,LOGIN_FAIL} from '../types'

export const signInAction =(email,password)=>{
    return async(dispatch)=>{
        try {
            dispatch( startLoading() )
            //Iniciar Seccion 
            const {user} = await auth.signInWithEmailAndPassword(email, password)
            const { displayName,uid}= user;
            const profile = await getUserProfile(uid,displayName)
            dispatch( loginSuccess(profile) )
        } catch (error) {
            console.log(error)
            dispatch( loginFail())
            return
        }
    }
}

export const loginSuccess=(user)=>({
    type:LOGIN_SUCCESS,
    payload:user
})

export const loginFail=()=>({
    type:LOGIN_FAIL,
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


export const startLoading=()=>({
    type:START_LOADING
})



export const registerWithEmailAndPassword =(usuario)=>{
    const {email,password1,empresa,nombre,apellido,} = usuario
    return async(dispatch)=>{
        try {
            await auth.createUserWithEmailAndPassword(email,password1)
            const user = auth.currentUser;
            await user.updateProfile({
                displayName:empresa
            });
            const {displayName,uid}= user;

            
            await db.doc(`${displayName}/usuarios/perfil/${uid}`).set({
                uid,
                nombre,
                apellido,
                empresa,
                rol:'admin'
            })
            console.log(user)

            dispatch(signOutAction())

            return 'registro exitoso'
        } catch (error) {            
            console.log(error)
        }
    }
}



export const getUserProfile = async(uid,displayName)=>{
   const getProfile = await db.doc(`${displayName}/usuarios/perfil/${uid}`).get()
   const data = getProfile.data()
    // const profile = getProfile.forEach( (doc)=>{
    //         console.log(doc.data())
    // })
   return data
}