import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import ReactGA from 'react-ga'
import "../App.css";



// const Footer=()=>{
//     const [modalShow, setModalShow] = React.useState(false);
//     return(<>
//                 <footer >
//                     <p style={{textAlign:'center',left:'40%'}}>Copyright © 2020 |  
//                     <span>Powered by <a href="https://my-portfolio-1a95b.web.app/" target="_blank" rel="noopener noreferrer">Pankaj Jain</a></span> | 
//                     <span onClick={() => setModalShow(true)} style={{cursor:"pointer"}}> About us</span> </p>
//                 </footer>
//                 <MyVerticallyCenteredModal
//                 show={modalShow}
//                 onHide={() => setModalShow(false)}
//                 />
//             </>
//     )

//   }


  const Footer = () => {



    ;
    return (
      <MDBFooter style={{background:"#1f3d48ff", color:"white"}} className=" pt-5 mt-4 footer">
        <MDBContainer fluid className="text-center text-md-left pb-4">
          <MDBRow className="text-center">
            <MDBCol md="4" className="d-none d-md-block">
            <h5 className="title">Quick Links</h5>
              <ul >
                  <li className="list-unstyled">
                    <a href="/about-us" onClick={recordAboutFooter}>About us</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="/terms-and-conditions"onClick={recordTermsFooter} >Terms & Conditions</a>
                  </li>
                  <li className="list-unstyled">
                  <a href="/privacy-policy" onClick={recordPrivacyFooter} >Privacy policy</a>
                  </li>
                  <li className="list-unstyled">
                  <a href="/disclaimer" onClick={recordDisclaimerFooter} >Disclaimer</a>
                  </li>
              </ul>
            </MDBCol>
            <MDBCol md="4" className="text-center">
              <h5 className="title tools" onClick={recordToolsFooter}>Tools & Resources</h5>
              <ul >
                  <li className="list-unstyled"  >
                    <a href="/startup-calculator" onClick={recordCalucator} ><i className="fa fa-calculator" aria-hidden="true"></i>  Calculator</a>
                  </li>
                  <li className="list-unstyled " >
                    <a href="/todolist" title="Todo List" onClick={recordTodo}><i className="fa fa-list-ol" aria-hidden="true"></i>  Todo Lists</a>
                  </li>
                  
              </ul>
            </MDBCol>
            <MDBCol md="4" >
              <h5 className="title">Socials</h5>
              <ul className="social-network social-circle text-left"> 
              <li>
                  <a href="https://www.facebook.com/Kunjiofsuccess-110280730654877/" className="icoFacebook" title="Facebook" onClick={recordFacebook}>
                    <i class="fa fa-facebook"/>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/kunjiofsuccess/" className="icoInstagram " title="Instagram" onClick={recordInstagram}>
                  <i class="fa fa-instagram"/>
                  </a>
                </li>
                
                <li>
                  <a href="https://www.linkedin.com/company/kunjiofsuccess/" className="icoLinkedin " title="Linkedin" onClick={recordLinkedin}>
                    <i class="fa fa-linkedin"/>
                  </a>
                </li>
              
                <li>
                  <a href="https://wa.me/918010592093?text=I%27am%20interested" className="icoWhatsapp " title="Whatsapp" onClick={recordWhatsapp}>
                  <i class="fa fa-whatsapp" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-1 mt-4">
          <MDBContainer fluid>
             <p style={{textAlign:'center',left:'40%'}}>Copyright © 2020  <span>| All Rights reserved</span>
                     <span> 
                        <a className="d-md-none" href="/about-us" onClick={recordAboutFooter} > | About us</a>
                        <a href="/privacy-policy" className="d-md-none"onClick={recordPrivacyFooter} >| Privacy policy</a>
                        <a href="/terms-and-conditions" className="d-md-none" onClick={recordTermsFooter}> | T&C </a>
                        <a href="/disclaimer" className="d-md-none" onClick={recordDisclaimerFooter}> | Disclaimer </a>
                     </span>  
             </p>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
  

export default Footer