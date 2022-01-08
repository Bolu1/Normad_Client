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

const MyJob = () => {
    var answer
    const[value, setValue] = useState()
    const[similar, setSimilar] = useState()
    const[user, setUser] = useState()
    const dispatch = useDispatch()
    const uselocation = useLocation()
    // var result
    var answer
    const auth = JSON.parse(localStorage.getItem('profile'))

    useEffect(() => {
        if(Cookies.get('profile') == undefined){
            window.location = '/signin'
            return
        }else{
        const search = uselocation.search
        const id = new URLSearchParams(search).get('id')
        const post ={
            token: auth.token,
            post: id
        }
        

        const get = async() =>{
            
            const response = await fetch(`https://normadclient.herokuapp.com/findMyOne?post=${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            })
            // console.log(post)
            const result = await response.json() 
            setValue(result.value)
            setSimilar(result.application)
            console.log(result.value)

        
    }
    // console.log("herer")
    get() }
    }, [])
    // const results = (useSelector((state) => state.jobs))
    // console.log(results)

    const edit = (id) =>{
        // console.log(id)
        // const {id} = useparams()
        window.location=`/editJob?id=${id}`
    }

    const applicant = (id) =>{
        window.location= `/otherProfile?id=${id}`
    }

    return (
        <div>
            <Nav />
            <br/>
            <br/>
            <br/>
            {/* ------job type------- */}
            {console.log(value)} 
            { value && value.map(results=>(
            <>
            <section class="bg-dark text-light jobName d-flex">
                <div className="container d-sm-flex align-self-center justify-content-center">
                    <h1>{results.category}</h1>
                </div>
            </section>
            <br/>
            <br/>
           
            <div class="container">
            <div class="card mb-3 instances" >
                <div class="row g-0">
                    <div class="col-md-4 ">
                    <img src="/img/diego-ph-fIq0tET6llw-unsplash.jpg" class="img-fluid rounded-start " alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body mt-2">
                        <h5 class="card-title">{results.title}</h5>
                        <p class="card-text">{results.description}</p>
                        <div class="d-flex">
                        <p class="card-text"><small class="text-muted">{results.dateAdded}</small></p>
                        
                        <button type="button" class="btn btn-dark text-dark remote">
                        Remote 
                        </button>

                        <button type="button" class="btn ml-2 btn-dark text-light remote1" onClick={() => edit(results._id)}>
                        Edit 
                        </button>
                        
                        </div>
                        
                         <div class="d-flex">
                         {/* <p class="mr-5">Posted by <strong>empname</strong></p> */}
                         {/* <p class="mx-5">address</p> */}
                         <h5 class="my-4">Pay: ${results.pay}</h5>
                         <p class="my-4 " style={{marginLeft:"auto"}}>address</p>
                         </div>
                    </div>
                    
                    </div>
                    
                </div>
                </div>

                {/* -----story----- */}
            
                <h5 class="mt-5">Job Description</h5>
                <p>{results.description}</p>


                <h5 class="mt-5">Skill Set</h5>
                <p><ul>
                    {results.skills.map(result =>(
                    <li><p>{result}</p></li>
                    ))}
                    </ul></p>

                <h5 class="mt-5">Experience Required</h5>
                <p><ul>
                {results.exp.map(result =>(
                    <li><p>{result}</p></li>
                    ))}
                    </ul></p>

                </div>

                </>
             ))} 

                

            <br/>
            <br/>
            <h3 class="text-center">Applications</h3>
            <br/>
            <br/>

            { similar && similar.map(results=>(
            <>
            <section class="results"  onClick={() => applicant(results._id)}>
                <div class="container ml-5">
                <ul class="list-group list-group-flush">

                    <li class="list-group-item" style={{cursor:"pointer"}}>
                        <div class="card mb-3 instances" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src="./img/diego-ph-fIq0tET6llw-unsplash.jpg" class="img-fluid rounded-start " alt="..."/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body mt-5">
                                <h4 class="card-title">{results.name}</h4>
                                <p class="card-text">{results.email}</p>
                                <div class="d-flex">
                                                            
                                </div>
                            
                            </div>
                            </div>
                        </div>
                        </div>
                    </li>

            </ul> </div>
            </section>
            </>
            ))}
            <Footer />
        </div>
    )
}

export default MyJob
