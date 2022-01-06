import React from 'react'
import Hnav from './navs/hnav'
import Lnav from './navs/lnav'
import {useEffect} from 'react'
import {profile} from '../../actions/auth'
import {profileJob} from '../../actions/jobs'
import {useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'

const Home = () => {
    const dispatch = useDispatch()
    const auth = localStorage.getItem('profile')
    const condition = Cookies.get('profile')
    console.log(condition)
    // const state = useSelector((state) => state)
    // console.log(auth)



    return (
        <>  
            { condition == undefined ?<Hnav />:<Lnav />}
            {/* <Hnav /> */}
        </>
    )
}

export default Home
