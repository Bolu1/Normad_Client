import React from 'react'
import Nav from '../home/nav'
import Footer from '../home/footer'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {search} from '../../actions/jobs'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getJobs} from '../../actions/jobs'
import { link } from 'react-router-dom'
import {useParams} from 'react-router-dom'


const Jobs = () => {
    const dispatch = useDispatch()
    const useparams = useParams()



    // var results = []
    // const[results, setResults] = useState([])
    const[post, setPost] = useState({post:""})
    const[img, setImg] = useState([])

    useEffect(() =>{
        dispatch(search(post)) 
    }, [])
    
    const OnSubmit = (e) =>{
        e.preventDefault()
        dispatch(search(post)) 


    }

    const results = (useSelector((state) => state.jobs))
    // console.log(results)

    const submit = (id) =>{
        // console.log(id)
        // const {id} = useparams()
        window.location=`/job?id=${id}`
    }
    

    return (
        <>

           <Nav />
            {/* -------search--------- */}
            <br/>
            <br/>
            <section class=" text-dark p-5">
                <div class="container">
                    <div class="container justify-content-center align-items-center">
                    <h3 class="md-3 mb-md-4 ml-5 sm-12 text-center ">Search</h3>
                    <div class="d-md-flex text-center g-1 justify-content-center">
                    
                        
                       {/* <form> */}
                        <form class="input-group news-input d-sm-flex " onSubmit={OnSubmit}>
                            
                            <input type="text" class="form-control search-box" placeholder="Search" value={post.post} onChange={(e) => setPost({post:e.target.value})}/>
                            <div class="input-group-append">
                            <button class="btn btn-dark btn-md d-none d-sm-block" type="submit" id="button-addon2">Search</button>
                            </div>
                            {/* <h3>ssdd</h3> */}
                            
                        </form>

                        {/* <div class="btn-group filters d-none ">
                        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </div> */}

                        
                        </div>
                    </div>
                </div>
            </section> 

            <div style={{minHeight:"500px"}}> 
            { results.length? (results[0].map(result =>(
            <section class="results" onClick={() => submit(result._id)} >
                <div class="container">
                <ul class="list-group list-group-flush">

                    <li class="list-group-item " style={{cursor:"pointer", borderBottom:"1px solid grey"}}>
                        <div class="card mb-3 instances" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src="./img/diego-ph-fIq0tET6llw-unsplash.jpg" class="img-fluid rounded-start " alt="..."/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body mt-3">
                                <p class="card-title">{result.title}</p>
                                <p class="card-text"><strong>PAY: ${result.pay}</strong></p>
                                <div class="d-flex">
                                <p class="card-text"><small class="text-muted">Posted {result.dateAdded}</small></p>
                                
                                <button type="button" class="btn btn-dark  text-dark remote justify-content-end ml-auto p-2">
                                {result.type} 
                                </button>
                                </div>
                                <div class="d-flex mt-2">
                                {/* <p class="mr-5">Posted by <strong>empname</strong></p> */}
                                <p class="mx-0" style={{marginLeft:"auto"}}>{result.location}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </li>

            </ul> </div>
            </section> ))):<h3 class="text-center" style={{minHeight:"500px", color:"grey", paddingTop:"100px"}}>No results</h3>}
            </div>
            <Footer />
        </>
    )
}

export default Jobs