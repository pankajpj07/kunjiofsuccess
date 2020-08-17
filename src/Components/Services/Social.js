import React,{ useEffect } from 'react'
import AOS from 'aos';
import Contact2 from '../Contact2'
import 'aos/dist/aos.css';
import "./social.css";
import {Card,Button} from 'react-bootstrap'
import Designs from './Designs'


export default function Social() {
    
    useEffect(() => {
        AOS.init({duration:2500})
    }, [])
    return (
        <>
        <section className="freearea-50 d-md-none"></section>
        <section className="freearea-100 d-none d-md-block"></section>
        <h1 className="title" style={{textAlign:'center',fontSize:'45px'}}>OUR WORK SO FAR</h1>
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
                        <h2>DESIGNING</h2>
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
       <hr/>
       <br/>
        <h1 className="title" style={{textAlign:'center',fontSize:'45px'}}>CHOOSE YOUR PACKAGE</h1>
        <br/>
        <hr/>
        <div className="pricing">
            <div className="plans py-5" >
                <Card data-aos="fade-right" className="boxes">
                    <Card.Body>
                        <Card.Title className="title" >Basic</Card.Title>
                        <Card.Text className="p-3 lists">
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
                        </Card.Text>
                        
                        <h2 style={{float:'left'}}>3499 </h2><span>*month</span>
                        <Button variant="success" href="#contact2" style={{float:'right'}}>Choose this plan</Button>
                    </Card.Body>
                </Card>
                <Card data-aos="fade-up" className="boxes" style={{backgroundColor:"#22055d",color:"white"}}>
                    <Card.Body>
                        <Card.Title className="title">Standard</Card.Title>
                        <Card.Text className="p-3 lists">
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
                        </Card.Text>
                        <h2 style={{float:'left'}}>5499 </h2><span>*month</span>
                        <Button variant="success" href="#contact2" style={{float:'right'}}>Choose this plan</Button>
                    </Card.Body>
                </Card>
                <Card data-aos="fade-left" className="boxes">
                    <Card.Body>
                        <Card.Title className="title">Premium</Card.Title>
                        <Card.Text className="p-3 lists">
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
                        </Card.Text >
                        <h2 style={{float:'left'}}>7499 </h2><span>*month</span>
                        <Button href="#contact2"  variant="success" style={{float:'right'}}>Choose this plan</Button>

                    </Card.Body>
                </Card>
            </div>
        </div>
        <Contact2/>
        </>
    )
}
