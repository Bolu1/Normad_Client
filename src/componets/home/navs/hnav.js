import React from 'react'

const Hnav = () => {
    return (
        <>
        <nav class="navbar navbar-expand-md bg-dark navbar-dark py-3 fixed-top">
        <div class="container">
        <a href="#" class="navbar-brand">Normad</a>

         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
             <span class="navbar-toggler-icon"></span>
         </button>

        <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
                {/* <li class="nav-item">
                    <a href="/jobs" class="nav-link">Jobs</a>
                </li> */}
                <li class="nav-item">
                    <a href="/search" class="nav-link">Search</a>
                </li>
                <li class="nav-item">
                    <a href="/aboutUs" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                    <a href="/signup" class="nav-link">Join us</a>
                </li>
            </ul>
        </div>
    </div>
    </nav>
    </>
    )
}

export default Hnav
