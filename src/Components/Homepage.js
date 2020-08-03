import React from 'react'
import {Container} from 'react-bootstrap'
import Contact from './Contact'
import Clients from './Clients'
import Services from './Services'



const Homepage=()=>{
    function ControlledCarousel() {
      
        
      
        return (<>
        <Container  id="home" className="m-t-7 text-center"> 
        <img
                              className="w-100"
                              src="/assets/1.png"
                              alt="Third slide"

                              />
          
          </Container>
           
          <Services />
          <Clients/>
          <Contact/>
          </>
        );
      } //function controlledcarousel
      
        return(
                <ControlledCarousel/>
        )
}
export default Homepage