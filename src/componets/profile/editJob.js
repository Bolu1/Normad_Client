import React from 'react'
import Nav from '../home/nav'
import Footer from '../home/footer'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'
import {addJob} from '../../actions/jobs'
import {useParams} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'

const EditJob = () => {
    const auth = JSON.parse(localStorage.getItem('profile'))
    const dispatch = useDispatch()
    const [message, setMessage] = useState("")
    const [ data, setdata] = useState({
        title: "",        
        description: "",
        category: "",
        pay:"",
        location:"",
        type:"",
        skills: [],
        experience: []
    })
    const uselocation = useLocation()
    // var result


    useEffect(() => {
        if(Cookies.get('profile') == undefined){
            window.location = '/signin'
            return
        }else{
        const search = uselocation.search
        const id = new URLSearchParams(search).get('id')
        // const token = JSON.stringify(token)
        const body = {
            token: auth.token
        }
        const get = async() =>{
        const res = await fetch(`https://normadclient.herokuapp.com/getJobDetails?post=${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const result = await res.json()
        console.log(result[0].title)
        setdata({title: result[0].title,
            description: result[0].description,
            category: result[0].category,
            pay: result[0].pay,
            type: result[0].type,
            location:result[0].location,
            skills:result[0].skills.map(s =>{
                return s+","
            }),
            experience:result[0].exp.map(s =>{
                return s+","
            })})

    }
    get()}
    }, [])
    

    const onSubmit = (e) =>{
        const search = uselocation.search
        const id = new URLSearchParams(search).get('id')
        e.preventDefault()
        console.log(data)
        if(data.title.length>7 ){
            console.log("Submited")
        const body = {
            token: auth.token,
            description: data.description,
            category: data.category,
            pay: data.pay,
            type: data.type,
            location:data.location,
            experience:data.experience,
            skills:data.skills,
            
        }
        const get = async() =>{
        const res = await fetch(`https://normadclient.herokuapp.com/editJob?post=${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        // const result = await res.json()

    }  
    get() 
    window.location= `/myJob?id=${id}`     
        }else{
            setMessage("One or more fields are too short")
        }
    }

    return (
        <>
            <Nav/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="container">
            <h1 class="text-center">Edit Job</h1>
            <br/>
            <br/>
            <p style={{color:"red", textAlign:"center"}}>{message}</p>
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

export default EditJob
