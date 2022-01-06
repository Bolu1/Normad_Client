import React from 'react'
import Nav from '../home/nav'
import Footer from '../home/footer'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { signup } from '../../actions/auth'
import {useHistory} from 'react-router-dom'
// import {useLocation}


const Signup = () => {

    const[message, setMessage] = useState('')
    const[auth, setAuth] = useState({
        email: '', password: '', confirm:''
    })
    const dispatch = useDispatch()
    const results = (useSelector((state) => state.auth.authData))

    const onSubmit = (e) =>{
        e.preventDefault()

        if(auth.confirm === auth.password){
        console.log(auth)
        dispatch(signup(auth))
        setMessage(results) }
        else{
            setMessage("Passwords don't match")

        }
    }

    return (
        <div>
            
            <Nav />
            {/* -------form--------- */}
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 class="text-center">Signup</h1>
            <br/>
            <br/>
            <h4 class='text-center text-danger'>
            {message}
            </h4>
            <br/>
            <br/>
            
            

            <section class="d-flex align-items-center">
                <div class="container w-300 auth-box align-self-center justify-content-center">
                <form classs="d-flex auth-form" onSubmit={onSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={auth.email} onChange={(e) => setAuth({...auth, email: e.target.value})}/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" value={auth.password} onChange={(e) => setAuth({...auth, password: e.target.value})}/>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" value={auth.confirm} onChange={(e) => setAuth({...auth, confirm: e.target.value})}/>
                    </div>
                    
                    <button type="submit" class="btn btn-dark align-self-center">Signup</button>
                </form>
                </div>
                
            </section>
            <br/>
            <br/>
            <div class="text-center">
                    <p>Already have an account? <a style={{color:"blue"}} href="/signin">signin</a></p>
                </div>



            {/* <br/>
            <br/>
            <Footer/> */}
        </div>
    )
}

export default Signup
