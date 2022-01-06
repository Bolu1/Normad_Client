import React from 'react'
import { Link } from 'react-router-dom'
import * as api from '../api/index.js'
const SIGNIN = "signin"
const SIGNUP = "signup"

export const signup = (auth) => async(dispatch) =>{
    try{
        const {data} = await api.signup(auth)
        const token = data.token
        const profile = {
            data: data,
            token: token
        }
        console.log(token)
        dispatch({type:'signup', profile})
        window.location ='/profile'
        
    }catch(error){
        console.log(error)
        dispatch({type:'error1'})
        console.log("BNNANANA")
        return
    }
} 

export const signin = (auth) => async(dispatch) =>{
    // console.log(auth,dispatch)
    try{
        const {data} = await api.signin(auth)
        const token = data.token
        const profile = {
            data: data,
            token: token
        }
        console.log(token)
        dispatch({type:'signin', profile})
        window.location ='/profile'

    }catch(error){
        console.log(error.message)
        dispatch({type:'error'})
        console.log("BNNANANA")
        // window.location= '/signin'
        return
    }
} 

export const profile = () => async(dispatch) =>{
    
    try{
        const {data} = await api.profile()
        dispatch({type:'profile', payload:data})
        // console.log(data)
    }catch(error){
        console.log(error)
        window.location = '/signin'
    }
}