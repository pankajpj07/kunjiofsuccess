import React from 'react'
import { Image ,Nav,} from 'react-bootstrap'
import ReactGA from "react-ga";
import "../App.css";

function Navbar() {

  //Event Functions for google Analytics
   const recordHome= () => {
        ReactGA.event({
          category: "Navigation",
          action: "Home Button Clicked!",
          transport: 'beacon'
        });
      };


    const recordWeb= () => {
      ReactGA.event({
        category: "Navigation",
        action: "Web Button Clicked!",
        transport: 'beacon'
      });
    };

    const recordSocial= () => {
      ReactGA.event({
        category: "Navigation",
        action: "Social Button Clicked!",
        transport: 'beacon'
      });
    };

    const recordAbout= () => {
      ReactGA.event({
        category: "Navigation",
        action: "About Button Clicked!",
        transport: 'beacon'
      });
    };

    const recordContact= () => {
      ReactGA.event({
        category: "Navigation",
        action: "Contact Button Clicked!",
        transport: 'beacon'
      });
    };





    return (
        <div className="sticky-top" id="top-shadow" style={{position:'sticky'}}>
	
	<header className="header">
		<div className="logo">
        <a href="/"  ><Image src="./assets/elogo1.png"  style={{height:"5vh"}}/></a>
		</div>
		
		<a href="#menu" className="mobile-menu__opener" id="mobile-menu__opener" role="button" tabindex="0"><span>Menu</span></a>
		<div className="mobile-menu__screen"></div>

		<nav id="menu" className="menu">
            <Nav.Link href="/" className="menu__item " onClick={recordHome}>Home</Nav.Link>
            <Nav.Link href="/web" className="menu__item" onClick={recordWeb} >Web</Nav.Link>
            <Nav.Link href="/social" className="menu__item" onClick={recordSocial}>Social</Nav.Link>
            <Nav.Link href="/about-us " className="menu__item" onClick={recordAbout}>About</Nav.Link>
            <Nav.Link href="/contact-us" className="menu__item" onClick={recordContact}>Contact</Nav.Link>
            {/*<Nav.Link href="https://api.whatsapp.com/send?phone=918010592093&text=Hi,%20I%20am%20interested%20in%20adding%20KunjiOfSuccess%20Advantage%20to%20my%20Brand.%20Lets%20Chat!" target="_blank"  className="d-md-none menu__item" >Contact Us</Nav.Link>*/}
		</nav>
	</header>
        </div>
    )
}

export default Navbar
