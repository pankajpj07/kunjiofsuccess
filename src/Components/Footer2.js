import React from 'react'
import "../App.css";

function Footer2() {
    return (
        <div>
            <div className="site-footer">
            <div className="container">
                <div className="row">
                <div className="col-sm-12 col-md-6">
                    <h6>About</h6>
                    <p className="text-justify"><span style={{color:'#ff725e'}}>KunjiOfSuccess</span> <i>EMPOWERING STARTUPS CREATING BRANDS </i>  is an imaginative marketing agency in Delhi makes the business website more interactive and search engine friendly to help to get top position in search engine. We are offering innovative Web Designing, Web Development, E-Commerce Website, Web Portal, SEO, Digital Marketing, Mobile Application computerized advertising and web showcasing arrangements.</p>
                    <br/>
                    <h6>Office</h6>
                    <p className="text-justify">House no. 34, i1 Block, Phase I, Budh Vihar, New Delhi, Delhi 110086</p>


                </div>

                <div className="col-xs-6 col-md-3 px-md-5 ">
                    <h6 className="py-2">Tools & Resources</h6>
                    <ul className="footer-links dif">
                    <li className="list-unstyled" >
                    <a href="/startup-calculator" ><i className="fa fa-calculator" aria-hidden="true"></i>  Calculator</a>
                  </li>
                  <li className="list-unstyled " >
                    <a href="/todolist" title="Todo List"><i className="fa fa-list-ol" aria-hidden="true"></i>  Todo Lists</a>
                  </li>
                    </ul>
                </div>

                <div className="col-xs-6 col-md-3">
                    <h6 className="py-2">Quick Links</h6>
                    <ul className="footer-links">
                    <li><a href="/about-us">About Us</a></li>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms-and-conditions">T&C</a></li>
                    <li><a href="/disclaimer"> Disclaimer</a></li>
                    <li><a href="https://cutshort.io/company/kunjiofsuccess-99" target="_blank" rel="noopener noreferrer"> Careers</a></li>
                    </ul>
                </div> 
                </div>
                <hr/>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                    <p className="copyright-text text-white">Copyright &copy; 2020 All Rights Reserved by 
                <a href="https://kunjiofsuccess.com" className="text-info"> Kunjiofsuccess</a>.
                    </p>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12">
                
              <ul className="social-network social-circle text-left"> 
              <li>
                  <a href="https://www.facebook.com/Kunjiofsuccess-110280730654877/" className="icoFacebook" title="Facebook">
                    <i class="fab fa-facebook-f"/>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/kunjiofsuccess/" className="icoInstagram " title="Linkedin">
                  <i class="fab fa-instagram"/>
                  </a>
                </li>
                
                <li>
                  <a href="https://www.linkedin.com/company/kunjiofsuccess/" className="icoLinkedin " title="Linkedin">
                    <i class="fab fa-linkedin"/>
                  </a>
                </li>
              
                <li>
                  <a href="https://wa.me/918010592093?text=I%27am%20interested" className="icoWhatsapp " title="Whatsapp">
                  <i class="fab fa-whatsapp" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer2
