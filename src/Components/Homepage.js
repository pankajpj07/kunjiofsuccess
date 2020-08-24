import React,{ useEffect } from 'react'
import Contact from './Contact'
import Services from './Services'
import Testimonials from './Testimonials'
// import Clients from './Clients'
import Great from './Great'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Helmet } from 'react-helmet';
import ReactGA from "react-ga"




const Homepage=()=>{
    function ControlledCarousel() {
      useEffect(() => {
        AOS.init({duration:1500})
    }, [])

    //Google Analytics Event

    const learnMore= () => {
      ReactGA.event({
        category: "Home Page",
        action: "Learn more Button Clicked!",
        transport: 'beacon'
      });
    };
        
      
        return (<>
          <Helmet>
          <title>KunjiOfSuccess: Empowering Startups, Creating Brands</title>
          <meta name="description" content="KunjiOfSuccess is a full-service digital marketing agency with highly creative and passionate experts for building a relationship between Brands & Customers through the combination of technology and communication." />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        
        <div class="view deep-purple darken-3 container-fluid" style={{height:'100vh',paddingLeft:'25px',paddingRight:'25px'}}>
          <div class="row align-items-center h-100 1-100">
            <div class="col-md-6 wow p-5" data-aos="fade-right">
              <h1 class="white-text mb-4">Better Website Design, More Conversion</h1>
              <p class="mb-4 pb-2 white-text">Different is Boring. We make your business Unique.</p>
              <a type="button" href="#contact" class="btn btn-outline-white btn-md ml-md-0">Get started</a>
              <a type="button" href="/about-us" class="btn btn-white btn-md" onClick={learnMore}>Learn More</a>
            </div>
            <div class="col-md-6 wow" data-aos="fade-left">
              <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/cards2.png" alt="" class="img-fluid"/>
            </div>
          </div>
        </div>
           <br/>
          <Services />
          {/* <Clients/> */}
          <Great/>
          <Testimonials/>
          <Contact/>
          </>
        );
      } //function controlledcarousel
      
        return(
                <ControlledCarousel/>
        )
}
export default Homepage