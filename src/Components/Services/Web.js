import React from 'react'
import "./social.css";
import Contact2 from '../Contact2'


export default function Web() {
    return (<>
            <div class="container-fluid" >

            <section class="dark-grey-text">

            <div class="row pr-lg-5">
            <div class="col-md-7 mb-4">

                <div class="view">
                <img src="https://mdbootstrap.com/img/illustrations/graphics(4).png" class="img-fluid" alt="smaple "/>
                </div>

            </div>
            <div class="col-md-5 d-flex align-items-center">
                <div>
                
                <h3 class="font-weight-bold mb-4">Let's Sync and Create</h3>

                    <p>Web design is important because it impacts how your audience perceives your brand. The impression you make on them can either get them to remain on your page and learn about your business or leave your page and turn to a competitor. A good web design helps you keep your leads on your page.</p>

                    <a type="button" href="#features" class="btn btn-orange btn-rounded mx-0">Features</a>

                </div>
            </div>
            </div>

            </section>
            <br/><br/><br/>
            </div>
            {/* Features to add on  */}

            <div class="container my-5" id="features">
                <section class=" text-center">
                    <h6 class="font-weight-normal text-uppercase font-small grey-text mb-4">Features</h6>
                    <h1 className=" h1-responsive" style={{textAlign:'center'}}>UNIQUE FACTORS</h1>

                    <hr class="w-header m-auto"/>
                    <p class="lead text-muted mx-auto mt-4 pt-2 mb-5">It's really easy to create a website for your awesome business.</p>
                    <div class="row">
                    <div class="col-md-3 mb-4">
                        <a href="#!" class="card hoverable">
                        <div class="card-body my-4">
                            <p><i class="fas fa-tablet-alt fa-2x text-muted"></i></p>
                            <h5 class="black-text mb-0">Responsive</h5>
                        </div>
                        </a>
                    </div>
                    <div class="col-md-3 mb-4">
                        <a href="#!" class="card hoverable">
                        <div class="card-body my-4">
                            <p><i class="fas fa-cogs fa-2x text-muted"></i></p>
                            <h5 class="black-text mb-0">Customizable</h5>
                        </div>
                        </a>
                    </div>
                    <div class="col-md-3 mb-4">
                        <a href="#!" class="card hoverable">
                        <div class="card-body my-4">
                            <p><i class="fas fa-pencil-ruler fa-2x text-muted"></i></p>
                            <h5 class="black-text mb-0">UI Elements</h5>
                        </div>
                        </a>
                    </div>
                    <div class="col-md-3 mb-4">
                        <a href="#!" class="card hoverable">
                        <div class="card-body my-4">
                            <p><i class="fas fa-recycle fa-2x text-muted"></i></p>
                            <h5 class="black-text mb-0">Clean Code</h5>
                        </div>
                        </a>
                    </div>
                    </div>
                    </section>
                    
                    
                    
                </div>
                <br/>
                <br/>
                <br/>
            {/* How we work */}
            <div class="container z-depth-1 my-5 pt-5 pb-3 px-5">
                <section>
                    
                    

                    <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div class="modal-content">
                        <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                        <iframe width="1280" height="720" src="https://www.youtube.com/embed/JbGsRHq9OCw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                        </div>
                        </div>
                    </div>
                    </div>

                    <h3 class="font-weight-bold text-center dark-grey-text pb-2">Three Easy Steps</h3>
                    <hr class="w-header my-4 m-auto"/>
                    <p class="lead text-center text-muted pt-2 mb-5">Explore the best video for website development in the market in a short 1-minute video.</p>

                    <div class="row align-items-center">

                    <div class="col-lg-6 mb-4">
                        <div class="view z-depth-1-half rounded">
                        <img class="rounded img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Work/12-col/img%20(6).jpg" alt="Video title"/>
                        <div class="mask flex-center rgba-black-light">
                            <a id="play" class="btn-floating btn-primary btn-lg" data-toggle="modal" data-target="#modal1"><i class="fas fa-play"></i></a>
                        </div>
                        </div>
                    </div>

                    <div class="col-lg-6 mb-4">

                        <ol class="step pl-0">
                        <li class="step-element pb-0">
                            <div class="step-number">
                            <span class="number">1</span>
                            </div>
                            <div class="step-excerpt">
                            <h6 class="font-weight-bold dark-grey-text mb-3">Write your requirements</h6>
                            <p class="text-muted">Tell us your business requirement on a paper, email or whatsapp. There is no restriction on medium.</p>
                            </div>
                        </li>
                        <li class="step-element pb-0">
                            <div class="step-number">
                            <span class="number">2</span>
                            </div>
                            <div class="step-excerpt">
                            <h6 class="font-weight-bold dark-grey-text mb-3">Sign the contract</h6>
                            <p class="text-muted">When you are convinced with our designing and developments skills. We'll send you a proposal and, snowball everything</p>
                            </div>
                        </li>
                        <li class="step-element pb-0">
                            <div class="step-number">
                            <span class="number">3</span>
                            </div>
                            <div class="step-excerpt">
                            <h6 class="font-weight-bold dark-grey-text mb-3">We start developing</h6>
                            <p class="text-muted">That's it. You make yourself a tea, now it's our job to make you a wonderful website</p>
                            </div>
                        </li>
                        </ol>

                    </div>

                    </div>
                    
                </section>

                </div>
                <br/>
                    <br/>
                    <br/>
                <hr/>

                    <br/>
                    <br/>
            {/* Modal and design */}
            <div class="container my-5">
            <section>
                <div class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                
                                <div class="row">
                                
                                    <div class="col-md-6 py-5 pl-5">
                                        
                                        <h5 class="font-weight-normal mb-3">Paper cup mockup</h5>

                                        <p class="text-muted">Key letters, explain which writing we he carpeting or fame, the itch expand medical amped through constructing time. And scarfs, gain, get showed accounts decades.</p>

                                        <ul class="list-unstyled font-small mt-5">
                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Client</strong></p>
                                                <p class="text-muted mb-4">Envato Inc.</p>
                                            </li>

                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Date</strong></p>
                                                <p class="text-muted mb-4">June 27, 2019</p>
                                            </li>

                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Skills</strong></p>
                                                <p class="text-muted mb-4">Design, HTML, CSS, Javascript</p>
                                            </li>

                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Address</strong></p>
                                                <a href="https://kunjiofsuccess.com">KunjiOfSuccess</a>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                
                                    <div class="col-md-6">
                                        
                                        <div class="view rounded-right stretched">
                                            <img class="img-fluid img-fit" src="/assets/Design_Images/1.png" alt="Sample "/>
                                        </div>
                                        
                                    </div>
                                
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                
                <div class="modal fade" id="basicExampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                
                                <div class="row">
                                
                                    <div class="col-md-6 py-5 pl-5">
                                        
                                        <h5 class="font-weight-normal mb-3">Paper cup mockup</h5>

                                        <p class="text-muted">Key letters, explain which writing we he carpeting or fame, the itch expand medical amped through constructing time. And scarfs, gain, get showed accounts decades.</p>

                                        <ul class="list-unstyled font-small mt-5">
                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Client</strong></p>
                                                <p class="text-muted mb-4">Envato Inc.</p>
                                            </li>

                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Date</strong></p>
                                                <p class="text-muted mb-4">June 27, 2019</p>
                                            </li>

                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Skills</strong></p>
                                                <p class="text-muted mb-4">Design, HTML, CSS, Javascript</p>
                                            </li>

                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Address</strong></p>
                                                <a href="https://kunjiofsuccess.com">KunjiOfSuccess</a>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                
                                    <div class="col-md-6">
                                        
                                        <div class="view rounded-right stretched">
                                            <img class="img-fluid img-fit" src="/assets/Design_Images/3.png" alt="Sample "/>
                                        </div>
                                        
                                    </div>
                                
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="basicExampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                
                                <div class="row">
                                
                                    <div class="col-md-6 py-5 pl-5">
                                        
                                        <h5 class="font-weight-normal mb-3">Paper cup mockup</h5>

                                        <p class="text-muted">Key letters, explain which writing we he carpeting or fame, the itch expand medical amped through constructing time. And scarfs, gain, get showed accounts decades.</p>

                                        <ul class="list-unstyled font-small mt-5">
                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Client</strong></p>
                                                <p class="text-muted mb-4">Envato Inc.</p>
                                            </li>

                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Date</strong></p>
                                                <p class="text-muted mb-4">June 27, 2019</p>
                                            </li>

                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Skills</strong></p>
                                                <p class="text-muted mb-4">Design, HTML, CSS, Javascript</p>
                                            </li>

                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Address</strong></p>
                                                <a href="https://kunjiofsuccess.com">KunjiOfSuccess</a>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                
                                    <div class="col-md-6">
                                        
                                        <div class="view rounded-right stretched">
                                            <img class="img-fluid img-fit" src="/assets/Design_Images/5.png" alt="Sample "/>
                                        </div>
                                        
                                    </div>
                                
                                </div>
                                
                            </div> 
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="basicExampleModal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                
                                <div class="row">
                                
                                    <div class="col-md-6 py-5 pl-5">
                                        
                                        <h5 class="font-weight-normal mb-3">Paper cup mockup</h5>

                                        <p class="text-muted">Key letters, explain which writing we he carpeting or fame, the itch expand medical amped through constructing time. And scarfs, gain, get showed accounts decades.</p>

                                        <ul class="list-unstyled font-small mt-5">
                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Client</strong></p>
                                                <p class="text-muted mb-4">Envato Inc.</p>
                                            </li>

                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Date</strong></p>
                                                <p class="text-muted mb-4">June 27, 2019</p>
                                            </li>

                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Skills</strong></p>
                                                <p class="text-muted mb-4">Design, HTML, CSS, Javascript</p>
                                            </li>

                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Address</strong></p>
                                                <a href="https://kunjiofsuccess.com">KunjiOfSuccess</a>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                
                                    <div class="col-md-6">
                                        
                                        <div class="view rounded-right stretched">
                                            <img class="img-fluid img-fit" src="/assets/Design_Images/2.png" alt="Sample "/>
                                        </div>
                                        
                                    </div>
                                
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="basicExampleModal5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                
                                <div class="row">
                                
                                    <div class="col-md-6 py-5 pl-5">
                                        
                                        <h5 class="font-weight-normal mb-3">Paper cup mockup</h5>

                                        <p class="text-muted">Key letters, explain which writing we he carpeting or fame, the itch expand medical amped through constructing time. And scarfs, gain, get showed accounts decades.</p>

                                        <ul class="list-unstyled font-small mt-5">
                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Client</strong></p>
                                                <p class="text-muted mb-4">Envato Inc.</p>
                                            </li>

                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Date</strong></p>
                                                <p class="text-muted mb-4">June 27, 2019</p>
                                            </li>

                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Skills</strong></p>
                                                <p class="text-muted mb-4">Design, HTML, CSS, Javascript</p>
                                            </li>

                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Address</strong></p>
                                                <a href="https://kunjiofsuccess.com">KunjiOfSuccess</a>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                
                                    <div class="col-md-6">
                                        
                                        <div class="view rounded-right stretched">
                                            <img class="img-fluid img-fit" src="/assets/Design_Images/4.png" alt="Sample "/>
                                        </div>
                                        
                                    </div>
                                
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="basicExampleModal6" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                
                                <div class="row">
                                
                                    <div class="col-md-6 py-5 pl-5">
                                        
                                        <h5 class="font-weight-normal mb-3">Paper cup mockup</h5>

                                        <p class="text-muted">Key letters, explain which writing we he carpeting or fame, the itch expand medical amped through constructing time. And scarfs, gain, get showed accounts decades.</p>

                                        <ul class="list-unstyled font-small mt-5">
                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Client</strong></p>
                                                <p class="text-muted mb-4">Envato Inc.</p>
                                            </li>

                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Date</strong></p>
                                                <p class="text-muted mb-4">June 27, 2019</p>
                                            </li>

                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Skills</strong></p>
                                                <p class="text-muted mb-4">Design, HTML, CSS, Javascript</p>
                                            </li>

                                            <li>
                                                <p class="text-uppercase mb-2"><strong>Address</strong></p>
                                                <a href="https://kunjiofsuccess.com">KunjiOfSuccess</a>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                
                                    <div class="col-md-6">
                                        
                                        <div class="view rounded-right stretched">
                                            <img class="img-fluid img-fit" src="/assets/Design_Images/6.png" alt="Sample "/>
                                        </div>
                                        
                                    </div>
                                
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            <h6 class="font-weight-bold text-center grey-text text-uppercase small mb-4">portfolio</h6>
            <h1 className=" h1-responsive" style={{textAlign:'center'}}>WEBSITE DESIGNS</h1>

            <hr class="w-header my-4 m-auto"/>
            <p class="lead text-center text-muted pt-2 mb-5">You can find website product design by our professional team in
                this section.</p>
                
            <div class="row">

                <div class="col-12">

                <ul class="nav md-pills flex-center flex-wrap mx-0" role="tablist">
          <li class="nav-item">
            <a class="nav-link active font-weight-bold text-uppercase" data-toggle="tab" href="#panel31" role="tab">ALL</a>
          </li>
          <li class="nav-item">
            <a class="nav-link font-weight-bold text-uppercase" data-toggle="tab" href="#panel32" role="tab">Design</a>
          </li>
          <li class="nav-item">
            <a class="nav-link font-weight-bold text-uppercase" data-toggle="tab" href="#panel33" role="tab">Mockup</a>
          </li>
        </ul>

                </div>

            </div>

            <div class="tab-content mb-5">

                <div class="tab-pane fade show in active" id="panel31" role="tabpanel">

                <div class="row">

                    <div class="col-md-12 col-lg-4">

                    <a class="card hoverable mb-4" data-toggle="modal" data-target="#basicExampleModal">

                        <img class="card-img-top" src="/assets/Design_Images/1.png" alt="Card  cap"/>

                        <div class="card-body">

                        <h5 class="my-3">Luxury Brand</h5>
                        <p class="card-text text-uppercase mb-3">A brand is a voice and a product is a souvenir. </p>

                        </div>

                    </a>

                    <a class="card hoverable mb-4" data-toggle="modal" data-target="#basicExampleModal4">

                        <img class="card-img-top" src="/assets/Design_Images/2.png" alt="Card  cap"/>

                        <div class="card-body">

                        <h5 class="my-3">Bagpack Summer</h5>
                        <p class="card-text text-uppercase mb-3">It's summer time let's go hiking with our backpacks</p>

                        </div>

                    </a>

                    </div>

                    <div class="col-md-6 col-lg-4">

                    <a class="card hoverable mb-4" data-toggle="modal" data-target="#basicExampleModal2">

                        <img class="card-img-top" src=" /assets/Design_Images/3.png" alt="Card  cap"/>

                        <div class="card-body">

                        <h5 class="my-3">Fashion</h5>
                        <p class="card-text text-uppercase mb-3">You can have anything you want in life if you dress for it</p>

                        </div>

                    </a>

                    <a class="card hoverable mb-4" data-toggle="modal" data-target="#basicExampleModal5">

                        <img class="card-img-top" src="/assets/Design_Images/4.png" alt="Card  cap"/>

                        <div class="card-body">

                        <h5 class="my-3">Blog website</h5>
                        <p class="card-text text-uppercase mb-3">A blog is only as interesting as the interest shown in others.”</p>

                        </div>

                    </a>

                    </div>

                    <div class="col-md-6 col-lg-4">

                    <a class="card hoverable mb-4" data-toggle="modal" data-target="#basicExampleModal3">

                        <img class="card-img-top" src=" /assets/Design_Images/5.png" alt="Card  cap"/>

                        <div class="card-body">

                        <h5 class="my-3">Rental Bike</h5>
                        <p class="card-text text-uppercase mb-3">Rent a bike to fit into your daily routine.</p>

                        </div>

                    </a>

                    <a class="card hoverable mb-4" data-toggle="modal" data-target="#basicExampleModal6">

                        <img class="card-img-top" src="/assets/Design_Images/6.png" alt="Card  cap"/>

                        <div class="card-body">

                        <h5 class="my-3">Mediatate Application Design</h5>
                        <p class="card-text text-uppercase mb-3">Meditation is a vital way to quiet the mind and the body</p>

                        </div>

                    </a>

                    </div>

                </div>
                </div>

                <div class="tab-pane fade" id="panel32" role="tabpanel">

                <div class="row">
                    <div class="col-md-12 col-lg-4">
                    <a class="card hoverable mb-4" data-toggle="modal" data-target="#basicExampleModal6">
                        <img class="card-img-top" src="/assets/Design_Images/6.png" alt="Card  cap"/>
                        <div class="card-body">

                        <h5 class="my-3">Mediatate Application Design</h5>
                        <p class="card-text text-uppercase mb-3">Meditation is a vital way to quiet the mind and the body</p>

                        </div>

                    </a>

                    </div>
                    <div class="col-md-6 col-lg-4">

                    <a class="card hoverable mb-4" data-toggle="modal" data-target="#basicExampleModal3">
                        <img class="card-img-top" src=" /assets/Design_Images/5.png" alt="Card  cap"/>
                        <div class="card-body">
                        <h5 class="my-3">Rental Bike</h5>
                        <p class="card-text text-uppercase mb-3">Rent a bike to fit into your daily routine.</p>

                        </div>

                    </a>
                    </div>
                    <div class="col-md-6 col-lg-4">
                    <a class="card hoverable mb-4" data-toggle="modal" data-target="#basicExampleModal5">

                        <img class="card-img-top" src="/assets/Design_Images/4.png" alt="Card  cap"/>

                        <div class="card-body">

                        <h5 class="my-3">Blog website</h5>
                        <p class="card-text text-uppercase mb-3">A blog is only as interesting as the interest shown in others.”</p>

                        </div>

                    </a>

                    </div>

                </div>

                </div>

                <div class="tab-pane fade" id="panel33" role="tabpanel">

                <div class="row">

                    <div class="col-md-12 col-lg-4">

                    <div class="card hoverable mb-4" data-toggle="modal" data-target="#basicExampleModal2">

                        <img class="card-img-top" src="/assets/Design_Images/3.png" alt="Card  cap"/>

                        <div class="card-body">
                        <h5 class="my-3">Fashion</h5>
                        <p class="card-text text-uppercase mb-3">You can have anything you want in life if you dress for it</p>


                        </div>

                    </div>

                    </div>

                    <div class="col-md-6 col-lg-4">

                    <a class="card hoverable mb-4" data-toggle="modal" data-target="#basicExampleModal4">

                        <img class="card-img-top" src="/assets/Design_Images/2.png" alt="Card  cap"/>

                        <div class="card-body">
                        <h5 class="my-3">Bagpack Summer</h5>
                        <p class="card-text text-uppercase mb-3">It's summer time let's go hiking with our backpacks</p>


                        </div>

                    </a>

                    </div>

                    <div class="col-md-6 col-lg-4">

                    <a class="card hoverable mb-4" data-toggle="modal" data-target="#basicExampleModal">

                        <img class="card-img-top" src="/assets/Design_Images/1.png " alt="Card  cap"/>

                        <div class="card-body">
                        <h5 class="my-3">Luxury Brand</h5>
                        <p class="card-text text-uppercase mb-3">A brand is a voice and a product is a souvenir. </p>


                        </div>

                    </a>

                    </div>

                </div>

                </div>

            </div>

            </section>
            <hr/>
        <Contact2/>
</div>
                </>
    )
}
