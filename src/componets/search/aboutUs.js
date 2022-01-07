import React from 'react'
import Nav from '../home/nav'
import Footer from '../home/footer'
import{ useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {findOne} from '../../actions/jobs'
import {useSelector} from 'react-redux'
import { useState } from 'react'
import Cookies from 'js-cookie'

const AboutUs = () => {
    

    return (
        <div>
            <Nav />
            <br/>
            <br/>
            {/* ------job type------- */}

            <>
            <section class="bg-dark text-light jobName d-flex">
                <div className="container d-sm-flex align-self-center justify-content-center">
                    <h1>About us</h1>
                </div>
            </section>
            <br/>
            <br/>
           
            <div class="container">
                {/* <h3 class="text-center">Normad</h3> */}
                <br/>
                <br/>
                <h4 class="text-center">
                  You really thought i was going to put something here? Anyway made by Adetifa_Bolu
                </h4>
                <br/>
                <br/>
                <a href="/boluadetifa@gmail.com" class="text-center">
                  <p class="text-center">
                  Email: boluadetifa@gmail.com</p>
                </a>
                <br/>
                <br/>
             </div>

            </>
 
            <Footer />
        </div>
    )
}

export default AboutUs
