import React from 'react'
import Nav from '../home/nav'
import Footer from '../home/footer'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'
import {addJob} from '../../actions/jobs'
import {useParams} from 'react-router-dom'
import Cookies from 'js-cookie'

const AddJob = () => {
    const dispatch = useDispatch()
    const [message, setMessage] = useState("")
    const [ data, setdata] = useState({
        title: "",
        description: "",
        location: "",
        category: "",
        skills: '',
        experience: ''
    })

    useEffect(() => {
        
        if(Cookies.get('profile') == undefined){
            window.location = '/signin'
            return
        }else{
            return
        }
    }, [])

    const onSubmit = (e) =>{
        e.preventDefault()
        console.log(data.title.length)
        if(data.title.length>7 ){
        dispatch(addJob(data)) 
        
    }
        else{
            setMessage("One or more fields are too short")
            window.location ='#top'
        }
       
    }

    return (
        <>
            <Nav/>
            <a name='top'></a>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="container">
            <h1 class="text-center">Post a job</h1>
            <br/>
            <br/>
            <h4 style={{color:"red", textAlign:"center"}}>{message}</h4>
            <br/>
            <br/>
            <form onSubmit={onSubmit}>

                <div class="form-group">
                    <label for="exampleFormControlInput1"><strong>Title</strong></label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"  value={data.title} onChange={(e)=>setdata({...data, title: e.target.value})}/>
                </div>

                <div class="form-group mt-5">
                    <label for="exampleFormControlTextarea1"><strong>Description</strong></label>
                    <textarea class="form-control xl" id="exampleFormControlTextarea1" rows="3" value={data.description} onChange={(e)=>setdata({...data, description: e.target.value})}></textarea>
                </div>

                {/* <br/>
                <br/> */}
                <div class="form-group mt-5 mb-5">
                    <label for="exampleFormControlInput1 "><strong>Category</strong></label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"  value={data.category} onChange={(e)=>setdata({...data, category: e.target.value})}/>
                </div>

                <div class="form-group mt-5 mb-5">
                    <label for="exampleFormControlInput1 "><strong>Pay</strong></label>
                    <input type="number" class="form-control" id="exampleFormControlInput1"  value={data.pay} onChange={(e)=>setdata({...data, pay: e.target.value})}/>
                </div>

                <label for="exampleFormControlInput1 "><strong>Type</strong></label>
                <select 
                required
                className="form-control"
                value={data.type}l
                onChange={(e) =>{setdata({...data, type:e.target.value})
                    console.log(data.type)
                }}
                style={{ paddingRight:"300px", paddingBottom:"5px"}}
            >  
                <option>Remote</option>
                <option>On location</option> 
            </select>


                <div class="form-group mt-5 mb-5">
                    <label for="exampleFormControlTextarea1"><strong>Location</strong></label>
                    <textarea class="form-control xl" id="exampleFormControlTextarea1" rows="3" value={data.location} onChange={(e)=>setdata({...data, location: e.target.value})}></textarea>
                </div>

                <div class="form-group mt-5 mb-5">
                    <label for="exampleFormControlTextarea1"><strong>Skills</strong></label>
                    <textarea class="form-control xl" placeholder="seprate with commas" id="exampleFormControlTextarea1" rows="3" value={data.skills} onChange={(e)=>setdata({...data, skills:e.target.value.split((','))})}></textarea>
                </div>

                <div class="form-group mt-5 mb-5">
                    <label for="exampleFormControlTextarea1"><strong>Experience</strong></label>
                    <textarea class="form-control xl" placeholder="seprate with commas" id="exampleFormControlTextarea1" rows="3" value={data.experience} onChange={(e)=>setdata({...data, experience:e.target.value.split(',')})}></textarea>
                </div>


                <button type="submit" class="btn btn-dark px-4 btn-md">Add</button>
                </form>
                <br/>
            </div>
            <Footer />
        </>
    )
}

export default AddJob
