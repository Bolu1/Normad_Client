import React from 'react'
import Nav from '../home/nav'
import Footer from '../home/footer'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'
import {profile} from '../../actions/auth'
import {profileJob} from '../../actions/jobs'
import {useParams} from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const OtherProfile = () => {
    const auth = JSON.parse(localStorage.getItem('profile'))
    const [condition, setCondition] = useState(false)
    // console.log("auth " +auth.token)
    const dispatch = useDispatch()
    const[value, setValue] = useState()
    const[jobs, setJobs] = useState()
    var result
    var job

    const submit = (id) =>{
        // console.log(id)
        // const {id} = useparams()
        window.location=`/job?id=${id}`
    }
    const uselocation = useLocation()

   useEffect(() => {
    const search = uselocation.search
    const id = new URLSearchParams(search).get('id')
    // const token = JSON.stringify(token)
    const body = {
        token: auth.token
    }
    const get = async() =>{
    const res = await fetch(`http://localhost:8000/getDetailsUser?post=${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    result = await res.json()
    setValue(result)
    // console.log(result)

 
    const resu = await fetch(`http://localhost:8000/profileJob`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    job = await resu.json()
    setJobs(job)

   }
   get()

    }, [])

    // const result = results[0]

    const applications = () =>{
        setCondition(true)
        const body = {
            token: auth.token
        }
        const get = async() =>{
        const res = await fetch(`http://localhost:8000/getYourApplication`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        result = await res.json()
        setJobs(result)
    }
    get()
    }

    const getJobs = () =>{
        setCondition(false)
        const body = {
            token: auth.token
        }
        const get = async() =>{
        const resu = await fetch(`http://localhost:8000/profileJob`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        job = await resu.json()
        setJobs(job)
    
       }
       get()
    
    }

    const deleteJob = async(id) =>{
        console.log(id)
        const body = {
            token: auth.token,
            post: id
        }
        const resu = await fetch(`http://localhost:8000/deleteJob`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        console.log("jobDeleted")
    }

    const deleteApp = async(id) =>{
        console.log(id)
        const body = {
            token: auth.token,
            post: id
        }
        const resu = await fetch(`http://localhost:8000/deleteApp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        console.log("applicationDeleted")
    }

    const settings = () =>{
        window.location ='/settings'
    }

    return (
        <div>

            <Nav />
                <br/>
                <br/>
                <br/>
                {/* { console.log(value)} */}
                { value && value.map(values =>(
                <div>
                <section class="bg-dark ">
                    <div class="container">
                    <div class="card mx-3 py-3 d-flex bg-dark text-light image-box" >
                        <img class="card-img-top img-fluid rounded-circle mb-2 align-self-center" src="img/diego-ph-fIq0tET6llw-unsplash.jpg" alt="Card image cap"/>
                        <div class="d-flex card-body align-self-center">
                            <h4 class="card-text mb-3"><strong>{values.name}</strong></h4> 
                        </div>
                        
                        </div>
                    </div>
                </section> 
                <div className="container">
                    <br />
                    
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-6">
                        <li class="list-group-item"> <i className="bi bi-person text-dark mx-1"></i> <strong>Email: </strong>   {values.email}</li>
                        </div>

                        <div className="col-md-6 col-lg-6">
                        <li class="list-group-item"> <i className="bi bi-twitter text-dark mx-1"></i> <strong>Twitter: </strong> <a style={{ cursor:"pointer"}} href={values.twitter} >{values.twitter} </a></li>
                        </div>

                        <div className="col-md-6 col-lg-6">
                        <li class="list-group-item"> <i className="bi bi-people text-dark mx-1"></i> <strong>Portfolio: </strong> <a style={{color:"blue", cursor:"pointer"}} href={values.portfolio}>{values.portfolio} </a></li>
                        </div>

                        <div className="col-md-6 col-lg-6">
                        <li class="list-group-item"> <i className="bi bi-linkedin text-dark mx-1"></i> <strong>LinkedIn: </strong> <a style={{color:"blue", cursor:"pointer"}} href={values.linkedin}>{values.linkedin} </a></li>
                        </div> 
                        </div>
                        
                       </div>
                       </div>
                  ))} 
                    <br/>
                    <br/>

                    
                    <h3 class="text-center">Posted Jobs</h3>
                    {console.log(jobs) }
                    { jobs ? jobs.map(jobs =>(
                    <section class="results d-flex my-5">
                <div class="container">
                <ul class="list-group list-group-flush d-flex">

                    <li class="list-group-item instances" onClick={() => submit(jobs._id)} style={{cursor:"pointer"}}>
                        <div class="card mb-3 instances" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src="./img/diego-ph-fIq0tET6llw-unsplash.jpg" class="img-fluid rounded-start " alt="..."/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body mt-5">
                                <h5 class="card-title">{jobs.title}</h5>
                                <p class="card-text"></p>
                                <div class="d-flex">
                                <p class="card-text"><small class="text-muted">Posted {jobs.dateAdded}</small></p>
                                
                               
                                </div>
                               
                            </div>
                            </div>
                        </div>
                        </div>
                    </li>


                    <div class="modal fade" id="job" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to delete this Job
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary bg-dark" data-bs-dismiss="modal">No</button>
                            <button  type="button" class="btn btn-primary bg-light text-dark delete-btn" onClick={() => deleteJob(jobs._id)} data-bs-dismiss="modal">Yes</button>
                        </div>
                        </div>
                    </div>
                </div>


                <div class="modal fade" id="app" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to delete this Application
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary bg-dark" data-bs-dismiss="modal">No</button>
                            <button  type="button" class="btn btn-primary bg-light text-dark delete-btn" onClick={() => deleteApp(jobs._id)} data-bs-dismiss="modal">Yes</button>
                        </div>
                        </div>
                    </div>
                </div>

            </ul> </div>
            </section>
            
             )): <h3 class="my-5" style={{textAlign:"center", color:'grey'}}>List is empty</h3>} 

           
            
            <br/>
            <br/>
            <Footer />
        </div>
    )
}

export default OtherProfile
