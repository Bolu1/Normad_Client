import React from 'react'
import Nav from './nav'
import Footer from './footer'
import { useSelector } from 'react-redux'


const Home = () => {
    const jobs = useSelector((state) => state.jobs)
    console.log(jobs)
    return (
        <>
          <Nav />

          <section class="bg-dark text-light pt-5 pb-5 text-center text-sm-start">
        <div class="container">
            <div class="d-sm-flex align-items-center justify-content-between">
                <div class="my-5">
                    <h1>Get <span class="text-warning">Non technical jobs </span></h1>
                    <p class="lead my-4">Normad is a community built to help nontechnical personels get jobs in tech companies and also helps companies post jobs and find talented nontechnicals</p>
                    <a href="/signup" >
                    <button href="/signup" type="button" class="btn btn-light btn-lg ">Join us</button> 
                    </a>
                </div>
            </div>
        </div>
    </section>


    {/* <!---------search-->

    <section class="bg-light text-dark p-5">
        <div class="container">
            <div class="container">
            <div class="d-md-flex justify-content-between align-items-center">
                <h3 class="md-3 mb-md-0 ml-5">Search</h3>

                <div class="input-group news-input mr-md-5">
                    <input type="text" class="form-control " placeholder="Search" />
                    <div class="input-group-append">
                      <button class="btn btn-dark btn-md " type="button" id="button-addon2">Button</button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section> */}

    {/* <!----------categories--> */}
    <section class="p-5">
        <div class="text-center pb-5">
        <h1>Categories</h1>
        <p>Normad provides you with vast non-technical roles all you need to do is pick which is right for you</p>
        </div>
        <div class="container">
            <div class="row text-center g-4">
                <div class="col-md-4">
                    <div class="card bg-dark text-light">
                        <div class="card-body text-center">
                            <div class="h1 mb-3">
                            <i class="bi bi-laptop"></i>
                            </div>
                            <h3 class="class-title mb-3">
                                Accountant
                            </h3>
                            <p class="card-text">
                                Join normad as an accountant to get accounting jobs
                            </p>
                            {/* <a href="#" class="btn btn-light btn1">Read More</a> */}
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card bg-dark text-light">
                        <div class="card-body text-center">
                            <div class="h1 mb-3">
                            <i class="bi bi-person"></i>
                            </div>
                            <h3 class="class-title mb-3">
                                HR Personel
                            </h3>
                            <p class="card-text">
                            Join normad as an HR personel to get  HR jobs
                            </p>
                            {/* <a href="#" class="btn btn-light btn1">Read More</a> */}
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card bg-dark text-light">
                    <div class="card-body text-center">
                        <div class="h1 mb-3">
                        <i class="bi bi-book"></i>
                        </div>
                        <h3 class="class-title mb-3">
                            Content creator
                        </h3>
                        <p class="card-text">
                             Join normad as an content creator to get hired as a content creator
                        </p>
                        {/* <a href="#" class="btn btn-light btn1">Read More</a> */}
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                    <div class="card bg-dark text-light">
                        <div class="card-body text-center">
                            <div class="h1 mb-3">
                            <i class="bi bi-laptop"></i>
                            </div>
                            <h3 class="class-title mb-3">
                                Social Media
                            </h3>
                            <p class="card-text">
                                  Join normad as a social media manager to get related jobs
                            </p>
                            {/* <a href="#" class="btn btn-light btn1">Read More</a> */}
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card bg-dark text-light">
                        <div class="card-body text-center">
                            <div class="h1 mb-3">
                            <i class="bi bi-laptop"></i>
                            </div>
                            <h3 class="class-title mb-3">
                                Marketing
                            </h3>
                            <p class="card-text">
                                Join normad as marketing expert to get hired as a marketer 
                            </p>
                            {/* <a href="#" class="btn btn-light btn1">Read More</a> */}
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card bg-dark text-light">
                        <div class="card-body text-center">
                            <div class="h1 mb-3">
                            <i class="bi bi-laptop"></i>
                            </div>
                            <h3 class="class-title mb-3">
                                Community Lead
                            </h3>
                            <p class="card-text">
                              Join normad and get a job as a community lead and so much more
                            </p>
                            {/* <a href="#" class="btn btn-light btn1">Read More</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!--------features--> */}
    <section class="p-5">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-md">
                    <img src="img/pencil.jpg" alt="cheeee" class="img-fluid"/>
                </div>
                <div class="col-md p-5">
                    <h2>Do stuff</h2>
                    <p class="lead">
                    Tech companies are now the coolest places to work in and they are often ranked in the top list of the best places to work worldwide.
                    </p>
                    <p>But then, there is a place for lots of other non-technical roles in tech companies. To begin your own tech career journey, we have a list of 10 roles in tech companies that do not require any technical experience or expertise.</p>
                    
                </div>
            </div>
        </div>
    </section>

    <section class="p-5 bg-dark text-light">
        <div class="container">
            <div class="row align-items-center justify-content-between">
               
                <div class="col-md p-5">
                    <h2>Do stuff</h2>
                    <p class="lead">
                    Technology companies aren’t just hiring technical people though, they’re also hiring for non-technical roles in areas such as marketing, product, and design.
                    </p>
                    <p>Technology jobs are projected to be among the fastest growing and are in demand due to the UK’s digital skills gap. According to this report, more than five million tech jobs are expected to be added globally by 2027.</p>
                    
                </div>
                <div class="col-md">
                    <img src="img/img1.jpg" alt="cheeee" class="img-fluid"/>
                </div>
                
            </div>
        </div>
    </section>

    {/* <!--------FAQ--> */}

    <section id="questions" class="p-5">
         <div class="container">
             <h2 class="text-center mb-4">
                 FAQ
             </h2>

             <div class="accordion accordion-flush" id="questions">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Doi i need technical skills
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#questions">
                    <div class="accordion-body">No you do not</div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Is it free
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#questions">
                    <div class="accordion-body">Yes it is</div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      Is it a scam
                    </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#questions">
                    <div class="accordion-body">No it is not</div>
                  </div>
                </div>
              </div>
         </div>
    </section>


    {/* <!----------Remarks--> */}

    <section id="Remarks" class="p-5 bg-dark">
        <div class="container">
            <h2 class="text-center text-white">
                Remarks
            </h2>
            <p class="lead text-center text-white mb-5">
                Remarks from reputable professionals(for demo only not real)
            </p>
            <div class="row g-4">
                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src="http://randomuser.me/api/portraits/men/11.jpg" alt="cheee" class="rounded-circle mb-3"/>
                            <h3 class="card-title mb-3">John Doe</h3>
                            <p class="card-text">Normad helped me boost my career </p>
                            <a href="#" class="bi bi-twitter text-dark mx-1"></a>
                            <a href="#" class="bi bi-facebook text-dark mx-1"></a>
                            <a href="#" class="bi bi-linkedin text-dark mx-1"></a>
                            <a href="#" class="bi bi-instagram text-dark mx-1"></a>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src="http://randomuser.me/api/portraits/men/12.jpg" alt="cheee" class="rounded-circle mb-3"/>
                            <h3 class="card-title mb-3">John Bar</h3>
                            <p class="card-text">Normad is one of the best i recommend using it</p>
                            <a href="#" class="bi bi-twitter text-dark mx-1"></a>
                            <a href="#" class="bi bi-facebook text-dark mx-1"></a>
                            <a href="#" class="bi bi-linkedin text-dark mx-1"></a>
                            <a href="#" class="bi bi-instagram text-dark mx-1"></a>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src="http://randomuser.me/api/portraits/men/13.jpg" alt="cheee" class="rounded-circle mb-3"/>
                            <h3 class="card-title mb-3">John Foo</h3>
                            <p class="card-text">All i can say is Normad changed my life</p>
                            <a href="#" class="bi bi-twitter text-dark mx-1"></a>
                            <a href="#" class="bi bi-facebook text-dark mx-1"></a>
                            <a href="#" class="bi bi-linkedin text-dark mx-1"></a>
                            <a href="#" class="bi bi-instagram text-dark mx-1"></a>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src="http://randomuser.me/api/portraits/men/14.jpg" alt="cheee" class="rounded-circle mb-3"/>
                            <h3 class="card-title mb-3">John Noe</h3>
                            <p class="card-text">NORMAD is not a typo, but any way Normad is a great platform</p>
                            <a href="#" class="bi bi-twitter text-dark mx-1"></a>
                            <a href="#" class="bi bi-facebook text-dark mx-1"></a>
                            <a href="#" class="bi bi-linkedin text-dark mx-1"></a>
                            <a href="#" class="bi bi-instagram text-dark mx-1"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer />
    
        </>
    )
}

export default Home
