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
import Cookies from 'js-cookie'


const Profile = () => {
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
        window.location=`/myJob?id=${id}`
    }

    const check = (id) =>{
        // console.log(id)
        // const {id} = useparams()
        window.location=`/job?id=${id}`
    }

   useEffect(() => {
    if(Cookies.get('profile') == undefined){
        window.location = '/signin'
        return
    }else{
    // const token = JSON.stringify(token)
    const body = {
        token: auth.token
    }
    const get = async() =>{
    const res = await fetch(`https://normadclient.herokuapp.com/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    result = await res.json()
    setValue(result)
    // console.log(result)

 
    const resu = await fetch(`https://normadclient.herokuapp.com/profileJob`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    job = await resu.json()
    setJobs(job)

   }
   get()}

    }, [])

    // const result = results[0]

    const applications = () =>{
        setCondition(true)
        const body = {
            token: auth.token
        }
        const get = async() =>{
        const res = await fetch(`https://normadclient.herokuapp.com/getYourApplication`, {
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
        const resu = await fetch(`https://normadclient.herokuapp.com/profileJob`, {
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
        const resu = await fetch(`https://normadclient.herokuapp.com/deleteJob`, {
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
        const resu = await fetch(`https://normadclient.herokuapp.com/deleteApp`, {
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

                {/* { console.log(value)} */}
                { value && value.map(values =>(
                <div>
                <section class="bg-dark ">
                    <div class="container">
                    <div class="card mx-3 py-3 d-flex bg-dark text-light image-box" >
                        <img class="card-img-top img-fluid rounded-circle mb-2 align-self-center" src="img/diego-ph-fIq0tET6llw-unsplash.jpg" alt="Card image cap"/>
                        <div class="d-flex card-body align-self-center">
                            <h4 class="card-text"><strong>{values.name}</strong></h4> 
                        </div>
                        <button type="button" class="btn btn-light align-self-center align-self-start mx-5 mb-3" onClick={settings}>Settings</button>
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

                    {/* <h4 class="mt-5">Description</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptate a  lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis minima molestias dolore hic cupiditate, accusantium neque qui totam accusamus, doloribus inventore numquam sunt? Rerum, harum unde quia mollitia sunt eligendi. optio ullam debitis corporis, ea quaerat quidem repellendus dignissimos reprehenderit cupiditate minus at beatae molestias aut consequuntur, ut eos.</p>

                    

                    <h4 class="mt-5">Skills</h4>
                    <p><ul>
                        <li><p>Witchcraft</p></li>
                        <li><p>Wizardry</p></li>
                        <li><p>Posion resistance</p></li>
                        <li><p>Night vison</p></li>
                        </ul></p>

                        <h4 class="mt-5">Experences</h4>
                    <p><ul>
                        <li><p>exp 1</p></li>
                        <li><p>exp 2</p></li>
                        <li><p>exp 3</p></li>
                        <li><p>exp 4 </p></li>
                        </ul></p> */}
                    <ul class="nav justify-content-center mb-4 switch">
                    <li class="nav-item d-flex">
                    <button type="button" class="btn btn-dark align-self-center align-self-start mx-5 mb-3 px-4" onClick={getJobs}>Jobs</button>
                    <button type="button" class="btn btn-dark align-self-center align-self-start mx-5 mb-3" onClick={applications}>Applications</button>
                    </li>

                    </ul>
                    {console.log(jobs) }
                    { jobs ? jobs.map(jobs =>(
                    <section class="results d-flex my-5" >
                <div class="container">
                {!condition?(
                <ul class="list-group list-group-flush d-flex">
                    
                    <li class="list-group-item instances" onClick={() => submit(jobs._id)} style={{cursor:"pointer"}}>
                        <div class="card mb-3 instances" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src="./img/diego-ph-fIq0tET6llw-unsplash.jpg" class="img-fluid rounded-start " alt="..."/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
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

                    <div>
                    {!condition?(
                                    // true applications and false jobs
                                <button  class="btn mx-3 btn-danger text-light remote1" data-bs-toggle="modal" data-bs-target="#job">
                                Delete 
                                </button>)
                                :<button class="btn mx-3 btn-danger text-light remote1" data-bs-toggle="modal" data-bs-target="#app">
                                Delete 
                                </button>}
                    </div>

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

            </ul>): 
            
            <ul class="list-group list-group-flush d-flex">
                    
                    <li class="list-group-item instances" onClick={() => check(jobs._id)} style={{cursor:"pointer"}}>
                        <div class="card mb-3 instances" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src="./img/diego-ph-fIq0tET6llw-unsplash.jpg" class="img-fluid rounded-start " alt="..."/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
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

                    <div>
                    {!condition?(
                                    // true applications and false jobs
                                <button  class="btn mx-3 btn-danger text-light remote1" data-bs-toggle="modal" data-bs-target="#job">
                                Delete 
                                </button>)
                                :<button class="btn mx-3 btn-danger text-light remote1" data-bs-toggle="modal" data-bs-target="#app">
                                Delete 
                                </button>}
                    </div>

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

            </ul>}
             </div>
            </section>
            
             )): <h3 class="my-5" style={{textAlign:"center", color:'grey'}}>List is empty</h3>} 

           
            
            <br/>
            <br/>
            <Footer />
        </div>
    )
}

export default Profile
