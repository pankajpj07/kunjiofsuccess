import React,{ useEffect } from 'react'
import AOS from 'aos';
import Contact2 from '../Contact2'
import 'aos/dist/aos.css';
import "./social.css";
import {Helmet} from "react-helmet"
// import {Card,Button} from 'react-bootstrap'
import Designs from './Designs'
import ReactGA from 'react-ga'
import { MDBBtn, MDBCard,MDBContainer, MDBRow, MDBCardBody, MDBBadge, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


export default function Social() {


    
    useEffect(() => {
        AOS.init({duration:2500})
    }, [])

    const basicPlan= () => {
        ReactGA.event({
          category: "Pricing",
          action: "Basic Plan Button Clicked!",
          transport: 'beacon'
        });
      };
      const standardPlan= () => {
        ReactGA.event({
          category: "Pricing",
          action: "Standard Plan Button Clicked!",
          transport: 'beacon'
        });
      };
    
      const premiumPlan= () => {
        ReactGA.event({
          category: "Pricing",
          action: "Premium Plan Button Clicked!",
          transport: 'beacon'
        });
      };
    return (
        <>
        <Helmet>
          <title>KunjiOfSuccess: Empowering Startups, Creating Brands</title>
          <meta name="description" content="We manage your online presence on social media platforms like Facebook, Instagram creating, publishing, and analyzing the content you post. In addition, SMM includes engaging and interacting with social media users"  data-react-helmet="true" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>

        <section className="freearea-50 d-md-none"></section>
        <div class="container-fluid my-5 py-5">


  <section class=" text-center">
    
    <h1 class="font-weight-bold pt-5 pb-2">THINK & CREATE</h1>

    <div class="row mx-3">
      <div class="col-md-4 px-4 mb-4">

        <div class="view">
          <img src="https://mdbootstrap.com/img/illustrations/drawkit-drawing-man-colour.svg" class="img-fluid" alt="smaple "/>
        </div>

      </div>
     <div class="col-md-4 px-4 mb-4">

        <div class="view">
          <img src="https://mdbootstrap.com/img/illustrations/drawkit-phone-conversation-colour.svg" class="img-fluid" alt="smaple "/>
        </div>

      </div>
      <div class="col-md-4 px-4 mb-4">

        <div class="view">
          <img src="https://mdbootstrap.com/img/illustrations/app-user-colour.svg" class="img-fluid" alt="smaple "/>
        </div>

      </div>
    </div>

  </section>


</div>
        <section className="freearea-100 d-none d-md-block"></section>
        <h1 className=" h1-responsive" style={{textAlign:'center'}}>OUR WORK SO FAR</h1>
        <hr/>
        <Designs/>
        <hr/>

        <section className="mt-5 orange-box">		
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-lg-5 text-center">
                        <img className="img-fluid" src="https://www.designerpeople.com/wp-content/themes/bootstrapfast/img/briefing-pic1.png" alt="briefing product shape"/>
                    </div>
                    <div className="col-md-7 col-lg-7">
                        <br/>
                        <h2>Research</h2>
                        <p className="text-justify">We try to get a structure with the initial assessment by understanding your business requirements. Our assessment is followed by deriving best-suited solutions for your business that helps you define the goals and outcomes of the site.</p>
                        <p>&nbsp;<br/><br/></p>
                        <p className="callnowfix">call now and fix up your meeting</p>
                        <a class="btn btn-success" href="#contact2" role="button">CONTACT US NOW</a>

                    </div>	
                </div>
            </div>
        </section>
        <section className="brown-box">	
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-lg-5 text-center d-md-none">
                        <img className="img-fluid" src="https://www.designerpeople.com/wp-content/themes/bootstrapfast/img/shape-pic.jpg" alt="product sketch"/><br/><br/></div>
                    <div className="col-md-7 col-lg-7 text-right">
                        <h2>DESIGN</h2>
                        <p className="text-justify">Briefing section is preceded by designing shapes with multiple aspects on the canvas. Every design we make are derived focusing on the respected business. For the products that take the liquid form, we work on sketches for bottles, tetra packs, and other feasible shapes.</p>
                        <img className="img-fluid" src="https://www.designerpeople.com/wp-content/themes/bootstrapfast/img/packaging-shape.jpg" alt="product shape design"/>
                        <p>&nbsp;<br/><br/></p>
                    </div>	
                    <div className="col-md-5 col-lg-5 text-center d-none d-md-block"><img className="img-fluid" src="https://www.designerpeople.com/wp-content/themes/bootstrapfast/img/shape-pic.jpg" alt="product shape"/><br/><br/></div>
                </div>
            </div>
        </section>
        <section className="strategy-box">		
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 text-center">
                        <img className="img-fluid" src="https://www.designerpeople.com/wp-content/themes/bootstrapfast/img/3d.png" alt="product 3d render"/><br/><br/></div>
                    <div className="col-md-6 col-lg-6">
                        <h2>ENGAGING</h2>
                        <p className="text-justify">Social engagement allows you to share your brand with more people. By increasing the number of positive interactions customers have with you online, you increase your chances of them recommending your brand to the people that they know or posting about their experience on social media.</p>
                    </div>
                </div>
            </div>
        </section>
        <br/>
        <br/>
       <hr/>
       <br/>
       <br/>
        <h1 className="title" style={{textAlign:'center',fontSize:'45px'}}>CHOOSE YOUR PACKAGE</h1>
        <br/>
        <br/>
        <br/>
        <hr/>
        <MDBContainer className="pricng ">
            <MDBRow>
                <MDBCol  className="p-lg-3 py-3 px-md-5  col-12col-sm-12 col-md-12 col-lg-4">
                    <MDBCard>
                        <MDBCardBody>
                        <MDBCardTitle><h1>Basic</h1></MDBCardTitle>
                        <br/>
                        <MDBCardText>
                            <ul>
                                <li className="included">10 graphic Posts</li>
                                <li className="included">Monthly Bio updation</li>
                                <li className="included">Monthly Insights report</li>
                                <li className="included">1 Profile Booster</li>
                                <li className="not-included">Theme Pages</li>
                                <li className="not-included">Post scheduling</li>
                                <li className="not-included">Captions &amp; Hashtags</li>
                                <li className="not-included">Custom Branding</li>
                                <li className="not-included">DM handling</li>
                            </ul>
                        </MDBCardText>
                        <br/>
                        <form><script src="https://cdn.razorpay.com/static/widget/payment-button.js" data-payment_button_id="pl_FSJZoX4GPVifYm"> </script> </form>
                        <h3>Buy Now at <MDBBadge color="primary">3499/-</MDBBadge></h3>
                        <MDBBtn   href='https://rzp.io/l/3oEhejU' target="_blank" onClick={basicPlan} >GRAB NOW</MDBBtn>
                        
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol className="p-lg-3 py-3 px-md-5  col-12 col-sm-12 col-md-12 col-lg-4">
                    <MDBCard>
                        <MDBCardBody>
                        <MDBCardTitle><h1>Standard</h1></MDBCardTitle>
                                                <br/>
                        <MDBCardText>
                            <ul>
                                <li className="included">20 graphic Posts</li>
                                <li className="included">Weekly Bio updation</li>
                                <li className="included">Weekly Insights report</li>
                                <li className="included">2 Profile Booster</li>
                                <li className="included">Theme Pages</li>
                                <li className="included">Post scheduling</li>
                                <li className="not-included">Captions &amp; Hashtags</li>
                                <li className="not-included">Custom Branding</li>
                                <li className="not-included">DM handling</li>
                            </ul>
                        </MDBCardText>
                        <br/>

                        <h3>Buy Now at <MDBBadge color="primary">5499/-</MDBBadge></h3>

                        <MDBBtn href='https://rzp.io/l/uBfYXHQ' target="_blank" onClick={standardPlan}>GRAB NOW</MDBBtn>
                        
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol className="p-lg-3 py-3 px-md-5  col-12 col-sm-12 col-md-12 col-lg-4">
                    <MDBCard>
                        <MDBCardBody>
                        <MDBCardTitle><h1>Premium</h1></MDBCardTitle>
                        <br/>
                        <MDBCardText>
                            <ul>
                                <li className="included">30 Posts + 10 stories</li>
                                <li className="included">On-demand Bio updation</li>
                                <li className="included">On-demand Insights report</li>
                                <li className="included">4 Profile Booster</li>
                                <li className="included">Theme Pages</li>
                                <li className="included">Post scheduling</li>
                                <li className="included">Captions &amp; Hashtags</li>
                                <li className="included">Custom Branding</li>
                                <li className="included">DM handling</li>
                            </ul>
                        </MDBCardText>
                        <br/>

                        <h3>Buy Now at <MDBBadge color="primary">7499/-</MDBBadge></h3>

                        <MDBBtn    href='https://rzp.io/l/AT7vfm9' target="_blank" onClick={premiumPlan}>GRAB NOW</MDBBtn>

                        
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <hr/>
        <Contact2/>
        </>
    )
}
