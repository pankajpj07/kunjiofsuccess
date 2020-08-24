import React from 'react'
import "../App.css";
import ReactGA from 'react-ga'
function Footer2() {
      //Google Analytics Events
      const recordCalucator= () => {
        ReactGA.event({
          category: "Footer",
          action: "Calucator Button clicked from Footer!",
          transport: 'beacon'
        });
      };
  
      const recordTodo= () => {
        ReactGA.event({
          category: "Footer",
          action: "Todo List Button clicked from Footer!",
          transport: 'beacon'
        });
      };
  
      const recordAboutFooter= () => {
        ReactGA.event({
          category: "Footer",
          action: "About us page link clicked from Footer!",
          transport: 'beacon'
        });
      };
      
      const recordAboutHome= () => {
        ReactGA.event({
          category: "Footer",
          action: "Home page link clicked from Footer!",
          transport: 'beacon'
        });
      };
  
      const recordTermsFooter= () => {
        ReactGA.event({
          category: "Footer",
          action: "Terms & Condition page link clicked from Footer!",
          transport: 'beacon'
        });
      };
  
      const recordPrivacyFooter= () => {
        ReactGA.event({
          category: "Footer",
          action: "Privacy Policy  page linked clicked from Footer!",
          transport: 'beacon'
        });
      };
  
      const recordDisclaimerFooter= () => {
        ReactGA.event({
          category: "Footer",
          action: "Disclaimer  page link clicked from Footer!",
          transport: 'beacon'
        });
      };
  
      const recordToolsFooter= () => {
        ReactGA.event({
          category: "Footer",
          action: "Tool & Resources link clicked from Footer!",
          transport: 'beacon'
        });
      };

      const ticket= () => {
        ReactGA.event({
          category: "Footer",
          action: "Ticket Raised from Footer !",
          transport: 'beacon'
        });
      };

      const carrear= () => {
        ReactGA.event({
          category: "Footer",
          action: "Carrear Page Viewed from Footer!",
          transport: 'beacon'
        });
      };
  
      const recordFacebook= () => {
        ReactGA.event({
          category: "Footer",
          action: "Facebook profile viewed from Footer!",
          transport: 'beacon'
        });
      }
  
        const recordWhatsapp= () => {
          ReactGA.event({
            category: "Footer",
            action: "Whatsapp profile viewed from Footer!",
            transport: 'beacon'
          });
        }
  
          const recordLinkedin= () => {
            ReactGA.event({
              category: "Footer",
              action: "Linkedin profile viewed from Footer!",
              transport: 'beacon'
            });
          }
  
            const recordInstagram= () => {
              ReactGA.event({
                category: "Footer",
                action: "Instagram profile viewed from Footer!",
                transport: 'beacon'
              });
            }
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
                    <h6 className="py-2" onClick={recordToolsFooter}>Tools & Resources</h6>
                    <ul className="footer-links dif">
                    <li className="list-unstyled" >
                    <a href="/startup-calculator" ><i className="fa fa-calculator" aria-hidden="true" onClick={recordCalucator}></i>  Calculator</a>
                  </li>
                  <li className="list-unstyled " >
                    <a href="/todolist" title="Todo List"><i className="fa fa-list-ol" aria-hidden="true" onClick={recordTodo}></i>  Todo Lists</a>
                  </li>
                    </ul>
                </div>

                <div className="col-xs-6 col-md-3">
                    <h6 className="py-2">Quick Links</h6>
                    <ul className="footer-links">
                    <li><a href="/about-us" onClick={recordAboutFooter}>About Us</a></li>
                    <li><a href="/privacy-policy" onClick={recordPrivacyFooter}>Privacy Policy</a></li>
                    <li><a href="/terms-and-conditions" onClick={recordTermsFooter}>T&C</a></li>
                    <li><a href="/disclaimer"onClick={recordDisclaimerFooter}> Disclaimer</a></li>
                    <li><a href="https://pankaj12pj88.freshdesk.com/support/tickets/new" target="_blank" rel="noopener noreferrer" onClick={ticket}> Raise a ticket</a></li>
                    <li><a href="https://cutshort.io/company/kunjiofsuccess-99" target="_blank" rel="noopener noreferrer" onClick={carrear}> Careers</a></li>
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
                  <a href="https://www.facebook.com/Kunjiofsuccess-110280730654877/" className="icoFacebook" title="Facebook" onClick={recordFacebook}>
                    <i class="fab fa-facebook-f"/>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/kunjiofsuccess/" className="icoInstagram " title="instagram" onClick={recordLinkedin}>
                  <i class="fab fa-instagram"/>
                  </a>
                </li>
                
                <li>
                  <a href="https://www.linkedin.com/company/kunjiofsuccess/" className="icoLinkedin " title="Linkedin" onClick={recordInstagram}>
                    <i class="fab fa-linkedin"/>
                  </a>
                </li>
              
                <li>
                  <a href="https://wa.me/918010592093?text=I%27am%20interested" className="icoWhatsapp " title="Whatsapp" onClick={recordWhatsapp}>
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
