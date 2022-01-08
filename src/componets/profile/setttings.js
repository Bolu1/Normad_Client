import React from 'react'
import Nav from '../home/nav'
import Footer from '../home/footer'
import { useState } from 'react'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

const Setttings = () => {

    const [ data, setdata] = useState({
        name: " ",        
        linkedin: "",
        twitter: "",
        portfolio:""
    })
    const auth = JSON.parse(localStorage.getItem('profile'))


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
        const result = await res.json()
        console.log(result)
        setdata({name: result[0].name,
                linkedin: result[0].linkedin,
                twitter: result[0].twitter,
                portfolio: result[0].portfolio,})
    }  
    get()}
    }, []) 

    const submit = () =>{

        console.log("Submit")
        const body = {
            token: auth.token,
            name: data.name,
            linkedin: data.linkedin,
            twitter: data.twitter,
            portfolio: data.portfolio
        }
        const get = async() =>{
        const res = await fetch(`https://normadclient.herokuapp.com/editProfile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        // const result = await res.json()
        window.location ='/profile'
    }  
    get()       
    }

    return (
        <div>
            <Nav />
                <br/>
                <br/>
                <h1 class="text-center mt-5">Select your avatar</h1>
                <br/>
                <br/>
                <div class="container">
                    <div class="row g-4">
                        <div class="col-md-4 d-flex text-center avatar-block">
                        <div class="card mb-3 text-center d-flex text-white">
                            <img class="card-img " src="img/diego-ph-fIq0tET6llw-unsplash.jpg" alt="Card image"/>
                            <div class="card-img-overlay align-self-center text-center d-flex pic-text">
                                <h3 class="align-self-center text-center">Gentle Panda</h3>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-4 d-flex text-center avatar-block">
                        <div class="card mb-3 text-center d-flex text-white">
                            <img class="card-img " src="img/diego-ph-fIq0tET6llw-unsplash.jpg" alt="Card image"/>
                            <div class="card-img-overlay align-self-center text-center d-flex pic-text">
                                <h3 class="align-self-center text-center">Gentle Panda</h3>
                            </div>
                            </div>
                        </div>


                        <div class="col-md-4 d-flex text-center avatar-block">
                        <div class="card mb-3 text-center d-flex text-white">
                            <img class="card-img " src="img/diego-ph-fIq0tET6llw-unsplash.jpg" alt="Card image"/>
                            <div class="card-img-overlay align-self-center text-center d-flex pic-text">
                                <h3 class="align-self-center text-center">Gentle Panda</h3>
                            </div>
                            </div>
                        </div>


                        <div class="col-md-4 d-flex text-center avatar-block">
                        <div class="card mb-3 text-center d-flex text-white">
                            <img class="card-img " src="img/diego-ph-fIq0tET6llw-unsplash.jpg" alt="Card image"/>
                            <div class="card-img-overlay align-self-center text-center d-flex pic-text">
                                <h3 class="align-self-center text-center">Gentle Panda</h3>
                            </div>
                            </div>
                        </div>


                        <div class="col-md-4 d-flex text-center avatar-block">
                        <div class="card mb-3 text-center d-flex text-white">
                            <img class="card-img " src="img/diego-ph-fIq0tET6llw-unsplash.jpg" alt="Card image"/>
                            <div class="card-img-overlay align-self-center text-center d-flex pic-text">
                                <h3 class="align-self-center text-center">Gentle Panda</h3>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-4 d-flex text-center avatar-block">
                        <div class="card mb-3 text-center d-flex text-white">
                            <img class="card-img " src="img/diego-ph-fIq0tET6llw-unsplash.jpg" alt="Card image"/>
                            <div class="card-img-overlay align-self-center text-center d-flex pic-text">
                                <h3 class="align-self-center text-center">Gentle Panda</h3>
                            </div>
                            </div>
                        </div>

                    </div>

                    <h2 class="text-center mt-3">Edit Profile</h2>
                     

                    <form >

                    <div class="form-group">
                        <label for="exampleFormControlInput1"><strong>Your Name</strong></label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"  value={data.name} onChange={(e)=>setdata({...data, name: e.target.value})}/>
                    </div>

                    <div class="form-group mt-5">
                        <label for="exampleFormControlTextarea1"><strong>LinkedIn Profile Link</strong></label>
                        <textarea class="form-control xl" id="exampleFormControlTextarea1" rows="3" value={data.linkedin} onChange={(e)=>setdata({...data, linkedin: e.target.value})}></textarea>
                    </div>

                    <div class="form-group mt-5">
                        <label for="exampleFormControlTextarea1"><strong>Twitter Profile Link</strong></label>
                        <textarea class="form-control xl" id="exampleFormControlTextarea1" rows="3" value={data.twitter} onChange={(e)=>setdata({...data, twitter: e.target.value})}></textarea>
                    </div>

                    <div class="form-group mt-5 mb-5">
                        <label for="exampleFormControlTextarea1"><strong>Portfolio Link</strong></label>
                        <textarea class="form-control xl" id="exampleFormControlTextarea1" rows="3" value={data.portfolio} onChange={(e)=>setdata({...data, portfolio: e.target.value})}></textarea>
                    </div>

                    <button type="button" class="btn btn-dark px-4 btn-md" data-bs-toggle="modal" data-bs-target="#modal2">Submit</button>
                    </form>
                    <br/>
                    <br/>
                    <button type="button" class="btn btn-danger btn-md" data-bs-toggle="modal" data-bs-target="#modal">Delete Account</button>
                    <br/>
                    <br/>
                </div>


                <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to delete your account
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary bg-dark" data-bs-dismiss="modal">No</button>
                            <button type="button" class="btn btn-primary bg-light text-dark delete-btn">Yes</button>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="modal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to make these changes
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary bg-dark" data-bs-dismiss="modal">No</button>
                            <button type="button" data-bs-dismiss="modal" class="btn btn-primary bg-light text-dark delete-btn" onClick={()=> submit()}>Yes</button>
                        </div>
                        </div>
                    </div>
                </div>

            <Footer />
        </div>
    )
}

export default Setttings
