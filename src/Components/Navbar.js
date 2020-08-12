import React from 'react'
import { Image ,Nav,} from 'react-bootstrap'

function Navbar() {
    return (
        <div className="sticky-top" id="top-shadow">
	
	<header className="header">
		<div className="logo">
        <a href="/"  ><Image src="./assets/elogo1.png"  style={{height:"70px"}}/></a>
		</div>
		
		<a href="#menu" className="mobile-menu__opener" id="mobile-menu__opener" role="button" tabindex="0"><span>Menu</span></a>
		<div className="mobile-menu__screen"></div>

		<nav id="menu" className="menu">
            <Nav.Link href="/" className="menu__item ">Home</Nav.Link>
            <Nav.Link href="/#services" className="menu__item" >Services</Nav.Link>
            <Nav.Link href="/about-us " className="menu__item">About</Nav.Link>
            <Nav.Link href="https://cutshort.io/company/kunjiofsuccess-99" target="_blank" className="menu__item">Careers</Nav.Link>
            <Nav.Link href="/#contact"  className="d-none d-md-block menu__item menu__item_active" >Contact</Nav.Link>
            <Nav.Link href="https://wa.me/918010592093?text=I%27m%20interested" target="_blank"  className="d-md-none menu__item menu__item_active" >Contact Us</Nav.Link>
		</nav>
	</header>
        </div>
    )
}

export default Navbar
