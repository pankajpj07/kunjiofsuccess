import React from 'react'
import "./social.css";

export default function Web() {
    return (<>
            <div className="container my-5">
        

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
                                                        <a href="https://mdbootstrap.com/docs/jquery/design-blocks/">MDBootstrap</a>
                                                    </li>
                                                </ul>
                                                
                                            </div>
                                            
                                        
                                            
                                            <div class="col-md-6">
                                                
                                                <div class="view rounded-right">
                                                    <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/5.jpg" alt="Sample image"/>
                                                </div>
                                                
                                            </div>
                                            
                                        
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    <h3 class="font-weight-bold text-center dark-grey-text pb-2">Web Designs</h3>
                    <hr class="w-header my-4 m-auto"/>
                    <p class="lead text-center text-muted pt-2 mb-5">You can find web product design by our professional team in this section.</p>


                    <div class="gallery mb-5" id="gallery">

                    
                    <div class="mb-3 pics all  animation">
                        <a data-toggle="modal" data-target="#basicExampleModal">
                        <img class="img-fluid z-depth-1 rounded" src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg" alt="Card image cap"/>
                        </a>
                    </div>
                    

                    
                    <div class="mb-3 pics animation all 1">
                        <a data-toggle="modal" data-target="#basicExampleModal">
                        <img class="img-fluid z-depth-1 rounded" src="https://mdbootstrap.com/img/Photos/Vertical/7.jpg" alt="Card image cap"/>
                        </a>
                    </div>

                    <div class="mb-3 pics animation all 1">
                        <a data-toggle="modal" data-target="#basicExampleModal">
                        <img class="img-fluid z-depth-1 rounded" src="https://mdbootstrap.com/img/Photos/Vertical/4.jpg" alt="Card image cap"/>
                        </a>
                    </div>

                    <div class="mb-3 pics all 2 animation">
                        <a data-toggle="modal" data-target="#basicExampleModal">
                        <img class="img-fluid z-depth-1 rounded" src="https://mdbootstrap.com/img/Photos/Others/images/63.jpg" alt="Card image cap"/>
                        </a>
                    </div>
                    

                    
                    <div class="mb-3 pics all 2 animation">
                        <a data-toggle="modal" data-target="#basicExampleModal">
                        <img class="img-fluid z-depth-1 rounded" src="https://mdbootstrap.com/img/Photos/Others/images/64.jpg" alt="Card image cap"/>
                        </a>
                    </div>
                    

                    
                    <div class="mb-3 pics animation all 1">
                        <a data-toggle="modal" data-target="#basicExampleModal">
                        <img class="img-fluid z-depth-1 rounded" src="https://mdbootstrap.com/img/Photos/Vertical/5.jpg" alt="Card image cap"/>
                        </a>
                    </div>
                    
                    
                    

                    </div>
                </section>

                </div>
                </>
    )
}
