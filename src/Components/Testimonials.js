import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Container} from 'react-bootstrap'

import { Carousel } from "react-responsive-carousel";
import "../App.css";

export default class Testimonials extends Component {
  render() {
    return (
        <Container fluid className="text-center">
                    <h3 className="display-4 font-weight-bold mb-0 pt-md-5 d-none d-md-block">Our Clients</h3>
                    <h5 className="display-4 font-weight-bold mb-0 pt-md-5 d-md-none">Our Clients</h5>
                    
                    <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}} className="d-none d-md-block">Let's see how people are enjoying working with us</p>
                    <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"18px"}} className="d-block d-md-none">Let's see how people are enjoying working with us</p>
                    
           
      <Carousel 
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        >
        <div>
          <img alt="RiverTab" src="./assets/rivertab.jpg" />
          <div className="myCarousel">
              
            <h3>RiverTab</h3>
            <h4>Real Estate agency in Hyderabad</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img alt="Shivani Polytech" src="./assets/sp.jpg" />
          <div className="myCarousel">
            <h3>Shivani Polytech</h3>
            <h4>Polybag's Manufacturers in Delhi </h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend KunjiOfSuccess to my peers.
            </p>
          </div>
        </div>

        <div>
          <img alt="BigTyme" src="./assets/bigtyme.jpg" />
          <div className="myCarousel">
            <h3>BigTyme</h3>
            <h4>Boxing & Fitness in Canada</h4>
            <p>
              I enjoy catching up with KunjiOfSuccess for my business, or my social profile management because of their commitment. The logo you are seeing with this testimonial is designed by KunjiOfSuccess in just 1 day.
          </p>
          </div>
        </div>
      </Carousel>
      </Container>

    );
  }
}