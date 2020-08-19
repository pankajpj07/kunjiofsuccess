import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Container} from 'react-bootstrap'

import { Carousel } from "react-responsive-carousel";
import "../App.css";

export default class Testimonials extends Component {
  render() {
    return (<>
        <div class="container mt-5">


<section class="text-center dark-grey-text">

  <h1 className=" h1-responsive" style={{textAlign:'center'}}>Testimonials</h1>

  <p class="text-center w-responsive mx-auto mb-5">We have worked with so many customers. Let's see what they say about us.</p>

  <div class="row">

    <div class="col-lg-4 col-md-12 mb-4">
      <div class="card testimonial-card">
        <div class="card-up info-color"></div>
        <div class="avatar mx-auto white">
          <img src="./assets/tyrrell.png" class="rounded-circle img-fluid" width="250px"/>
        </div>
        <div class="card-body">
          <h4 class="font-weight-bold mb-4">Tyrrell Bellzapproved</h4>
          <hr/>
          <p class="dark-grey-text mt-4"><i class="fas fa-quote-left pr-2"></i>The simple and intuitive design makes it easy for me use. I highly recommend KunjiOfSuccess to my peers</p>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card testimonial-card">
        <div class="card-up blue-gradient">
        </div>
        <div class="avatar mx-auto white">
          <img src="./assets/bigtyme.png" class="rounded-circle img-fluid" width="250px"/>
        </div>
        <div class="card-body">
          <h4 class="font-weight-bold mb-4">The BoxerDude</h4>
          <hr/>
          <p class="dark-grey-text mt-4"><i class="fas fa-quote-left pr-2"></i>I enjoy catching up with KunjiOfSuccess for my business, or my social profile management because of their commitment.</p>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card testimonial-card">
        <div class="card-up indigo"></div>
        <div class="avatar mx-auto white">
          <img src="./assets/dr-pankaj.jpeg" class="rounded-circle img-fluid" width="250px"/>
        </div>
        <div class="card-body">
          <h4 class="font-weight-bold mb-4">Dr. Pankaj Tuli</h4>
          <hr/>
          <p class="dark-grey-text mt-4"><i class="fas fa-quote-left pr-2"></i>You made it so simple. My new site is so much faster and easier to work. I just choose the page, make the change and click save.</p>
        </div>
      </div>
    </div>

  </div>

</section>


</div>
      
</>
    );
  }
}