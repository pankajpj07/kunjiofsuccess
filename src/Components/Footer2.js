import React from 'react'

function Footer2() {
    return (
        <div>
            <div className="site-footer">
            <div className="container">
                <div className="row">
                <div className="col-sm-12 col-md-6">
                    <h6>About</h6>
                    <p className="text-justify"><span className="orange">Kunjiofsuccess</span> <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                    <br/>
                    <h6>Office</h6>
                    <p className="text-justify">First Floor, Block 1B, RMZ NXT, EPIP, Whitefield Main Rd, Industrial Area, Whitefield, Bengaluru, Karnataka 560066</p>


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
                    <i class="fa fa-facebook"/>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/kunjiofsuccess/" className="icoInstagram " title="Linkedin">
                  <i class="fa fa-instagram"/>
                  </a>
                </li>
                
                <li>
                  <a href="https://www.linkedin.com/company/kunjiofsuccess/" className="icoLinkedin " title="Linkedin">
                    <i class="fa fa-linkedin"/>
                  </a>
                </li>
              
                <li>
                  <a href="https://wa.me/918010592093?text=I%27am%20interested" className="icoWhatsapp " title="Whatsapp">
                  <i class="fa fa-whatsapp" aria-hidden="true"></i>
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
