import React from 'react'
import Nav from '../home/nav'
import Footer from '../home/footer'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signin } from '../../actions/auth'
import {useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Signin = () => {
    
    const[auth, setAuth] = useState({
        email: '', password: '', confirm:''
    })
    const useselector = useSelector
    const[con, setCon] = useState(false)
    const dispatch = useDispatch()
    const location = useLocation()
    const[message, setMessage] = useState('')

    const redirect = () =>{
        console.log('redirect')
        
    }



    const onSubmit = (e) =>{
        e.preventDefault()
        console.log(dispatch)
        

        dispatch(signin(auth))
        // redirect()
        setMessage(results)
    }

    const results = (useselector((state) => state.auth.authData))

    const show = () =>{

        setCon(!con)
        console.log(con)
    }


    
    
    

    return (
        <div>
               
               <Nav />
            {/* -------form--------- */}
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 class="text-center">Signin</h1>
            <br/>
            <br/>
            <h4 class='text-center text-danger'>
            {message}
            </h4>

            
            

            <section class="d-flex align-items-center">
                <div class="container w-300 auth-box align-self-center justify-content-center">
                <form classs="d-flex auth-form" onSubmit={onSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={auth.email} onChange={(e) => setAuth({...auth, email: e.target.value})}/>
                        
                    </div>
                    {con?(
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" value={auth.password} onChange={(e) => setAuth({...auth, password: e.target.value})}/>
                    </div>)
                    :
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" value={auth.password} onChange={(e) => setAuth({...auth, password: e.target.value})}/>
                    </div>}

                    {/* <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div> */}
                    <input type="checkbox" onChange={show}/>
                    <label class="mx-3">show password</label>
                    <br/>
                    <br/>
                    <button type="submit" class="btn btn-dark align-self-center">Signin</button>
                    
                </form>
                </div>
            </section>
            <br/>
            <br/>
            <div class="text-center">
                    <p>Don't have an account? <a style={{color:"blue"}} href="/signup">signup</a></p>
                </div>


            {/* <br/>
            <br/>
            <Footer/> */}
        </div>
    )
}

export default Signin
