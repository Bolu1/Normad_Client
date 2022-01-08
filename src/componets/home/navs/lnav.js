import React from 'react'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

const Hnav = () => {

    const logout = () =>{
        Cookies.remove('profile')
        localStorage.removeItem('profile')
        window.location ='/signin'
    }

    return (
        <>
        <nav class="navbar navbar-expand-md bg-dark navbar-dark py-3  fixed-top">
        <div class="container">
        <a href="/" class="navbar-brand">Normad</a>

         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
             <span class="navbar-toggler-icon"></span>
         </button>

        <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
                {/* <li class="nav-item">
                    <a href="/jobs" class="nav-link mt-3">Jobs</a>
                </li> */}
                <li class="nav-item">
                    <a href="/search" class="nav-link mt-3">Search</a>
                </li>
                <li class="nav-item">
                    <a href="/aboutUs" class="nav-link mt-3">About</a>
                </li>
                <li class="nav-item">
                    <a href="/addJob" class="nav-link mt-3">Post</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-danger mt-3" onClick={logout}>Logout</a>
                </li>

                <li>
                <a href="/profile" class="nav-link">
                <div class="card  d-flex bg-dark text-light nav-image-box" >
                        <img href="/profile" class="card-img-top img-fluid rounded-circle align-self-center mt-2" src="img/diego-ph-fIq0tET6llw-unsplash.jpg" alt="Card image cap"/>             
                </div></a>
                </li>
                
            </ul>
        </div>
    </div>
    </nav>
    <br/>
    {/* <br/> */}
    </>
    )
}

export default Hnav
