import React from 'react'
import { Image ,Nav,} from 'react-bootstrap'
import "../App.css";

function Navbar() {
    return (
        <div className="sticky-top" id="top-shadow" style={{position:'sticky'}}>
	
	<header className="header">
		<div className="logo">
        <a href="/"  ><Image src="./assets/elogo1.png"  style={{height:"5vh"}}/></a>
		</div>
		
		<a href="#menu" className="mobile-menu__opener" id="mobile-menu__opener" role="button" tabindex="0"><span>Menu</span></a>
		<div className="mobile-menu__screen"></div>

		<nav id="menu" className="menu">
            <Nav.Link href="/" className="menu__item ">Home</Nav.Link>
            <Nav.Link href="/social" className="menu__item" >Social Media</Nav.Link>
            <Nav.Link href="/about-us " className="menu__item">About</Nav.Link>
            <Nav.Link href="https://wa.me/918010592093?text=I%27m%20interested/"  style={{color:'green'}} className="d-none d-md-block menu__item icoWhatsapp" >
                  <i class="fab fa-whatsapp" aria-hidden="true"></i>
            </Nav.Link>
            <Nav.Link href="https://wa.me/918010592093?text=I%27m%20interested" target="_blank"  className="d-md-none menu__item" >Contact Us</Nav.Link>
		</nav>
	</header>
        </div>
    )
}

export default Navbar
