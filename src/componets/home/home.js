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
                    <p class="lead my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem officiis dolor nulla sequi, atque eum animi, deserunt est, inventore et voluptate placeat! Cumque nesciunt deserunt ratione ex laudantium consectetur. Saepe?</p>
                    <button href="/signup" type="button" class="btn btn-light btn-lg ">Join us</button> 
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
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi saepe fugiat ipsum laboriosam aliquid adipisci.
                            </p>
                            <a href="#" class="btn btn-light btn1">Read More</a>
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
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi saepe fugiat ipsum laboriosam aliquid adipisci.
                            </p>
                            <a href="#" class="btn btn-light btn1">Read More</a>
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
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi saepe fugiat ipsum laboriosam aliquid adipisci.
                        </p>
                        <a href="#" class="btn btn-light btn1">Read More</a>
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
                                Accountant
                            </h3>
                            <p class="card-text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi saepe fugiat ipsum laboriosam aliquid adipisci.
                            </p>
                            <a href="#" class="btn btn-light btn1">Read More</a>
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
                                Accountant
                            </h3>
                            <p class="card-text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi saepe fugiat ipsum laboriosam aliquid adipisci.
                            </p>
                            <a href="#" class="btn btn-light btn1">Read More</a>
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
                                Accountant
                            </h3>
                            <p class="card-text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi saepe fugiat ipsum laboriosam aliquid adipisci.
                            </p>
                            <a href="#" class="btn btn-light btn1">Read More</a>
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
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime totam odit ut! Molestiae, suscipit officiis.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, laboriosam minima? Atque quia nam rem commodi. Dolorem, magnam suscipit. Laboriosam adipisci eaque molestias placeat dicta eos minus nemo obcaecati deleniti.</p>
                    
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
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime totam odit ut! Molestiae, suscipit officiis.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, laboriosam minima? Atque quia nam rem commodi. Dolorem, magnam suscipit. Laboriosam adipisci eaque molestias placeat dicta eos minus nemo obcaecati deleniti.</p>
                    
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
                      Do i need a brain
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#questions">
                    <div class="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quod nostrum minima repudiandae quasi exercitationem cum voluptatum iste repellendus eveniet, eligendi error voluptas voluptates expedita repellat incidunt natus dolorem assumenda.</div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Is it free
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#questions">
                    <div class="accordion-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eaque optio delectus tenetur laudantium sapiente cum quod distinctio, dignissimos fugit. Delectus ex velit vel cupiditate quae dignissimos quidem nam! Minus.</div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      Is it a scam
                    </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#questions">
                    <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a voluptate impedit debitis quidem harum itaque. Eaque fuga natus perspiciatis doloremque animi repellat veritatis sunt. Voluptatibus, enim soluta! Maxime, incidunt?</div>
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, architecto.
            </p>
            <div class="row g-4">
                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src="http://randomuser.me/api/portraits/men/11.jpg" alt="cheee" class="rounded-circle mb-3"/>
                            <h3 class="card-title mb-3">Bosss</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae quod repellat. Ipsam eum iure deserunt voluptates perspiciatis ipsa officia eaque iste voluptatibus inventore! Quaerat vitae minima natus. Voluptate, delectus.</p>
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
                            <img src="http://randomuser.me/api/portraits/men/11.jpg" alt="cheee" class="rounded-circle mb-3"/>
                            <h3 class="card-title mb-3">Bosss</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae quod repellat. Ipsam eum iure deserunt voluptates perspiciatis ipsa officia eaque iste voluptatibus inventore! Quaerat vitae minima natus. Voluptate, delectus.</p>
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
                            <img src="http://randomuser.me/api/portraits/men/11.jpg" alt="cheee" class="rounded-circle mb-3"/>
                            <h3 class="card-title mb-3">Bosss</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae quod repellat. Ipsam eum iure deserunt voluptates perspiciatis ipsa officia eaque iste voluptatibus inventore! Quaerat vitae minima natus. Voluptate, delectus.</p>
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
                            <img src="http://randomuser.me/api/portraits/men/11.jpg" alt="cheee" class="rounded-circle mb-3"/>
                            <h3 class="card-title mb-3">Bosss</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae quod repellat. Ipsam eum iure deserunt voluptates perspiciatis ipsa officia eaque iste voluptatibus inventore! Quaerat vitae minima natus. Voluptate, delectus.</p>
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
