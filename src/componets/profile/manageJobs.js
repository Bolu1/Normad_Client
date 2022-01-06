import React from 'react'
import Nav from '../home/nav'
import Footer from '../home/footer'

const ManageJob = () => {
    return (
        <div>
            <Nav />
            <br/>
            <br/>
            <br/>
            {/* ------job type------- */}
            <section class="bg-dark text-light jobName d-flex">
                <div className="container d-sm-flex align-self-center justify-content-center">
                    <h1>HR</h1>
                </div>
            </section>
            <br/>
            <br/>

            <div class="container">
            <div class="card mb-3 instances" >
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="./img/diego-ph-fIq0tET6llw-unsplash.jpg" class="img-fluid rounded-start " alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex">
                        <p class="card-text"><small class="text-muted">Posted 3 mins ago</small></p>
                        <h5 class="mx-4 ">$5000 - $8000</h5>
                        <button type="button" class="btn btn-dark text-dark remote">
                        Remote 
                        </button>

                        <button type="button" class="btn mx-5 btn-dark text-light ">
                        Edit 
                        </button>
                        
                        </div>
                         <div class="d-flex">
                         <p class="mr-5">Posted by <strong>empname</strong></p>
                         <p class="mx-5">address</p>
                         </div>
                    </div>
                    
                    </div>
                    
                </div>
                </div>

                {/* -----story----- */}
            
                <h5 class="mt-5">Job Description</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet enim et dolor dolorem. Illo nisi repudiandae totam fugiat, esse vero inventore lorem  consequuntur vel cupiditate, unde vitae distinctio? Voluptas, earum!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi placeat non quasi iusto! Minus debitis quae sapiente architecto unde, dolores excepturi quas provident a id nisi consectetur neque adipisci nihil!
                    </p>


                <h5 class="mt-5">Skill Set</h5>
                <p><ul>
                    <li><p>People sklls</p></li>
                    </ul></p>

                <h5 class="mt-5">Experience Required</h5>
                <p><ul>
                    <li><p>Some, i guess...</p></li>
                    </ul></p>

                <h5 class="mt-5">Employer Information</h5>
                <p>Company's name</p>

                <p><strong>EMAIL: </strong>email@emai.com</p>
                <p><strong>LinkedIn: </strong>email/emai.com</p>

                </div>
                

            <br/>
            <br/>
            <h3 class="text-center">Applications</h3>
            <br/>
            <br/>
            <div class="d-flex align-self-center justify-content-center" >
                <div class="justify-content-center">
                <ul class="list-group list-group-flush">
                <a href="#" style={{textDecoration:"none"}}><li class="list-group-item text-center" style={{minWidth:"400px", textDecoration:"none"}}>An item</li></a>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                    </ul>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default ManageJob
