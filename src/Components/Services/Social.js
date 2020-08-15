import React,{ useEffect } from 'react'
import AOS from 'aos';
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
        <section className="freearea-100">
        </section>
        <h1 className="title" style={{textAlign:'center',fontSize:'45px'}}>Our Designs</h1>
        <Designs/>
        <hr/>
        <section className="freearea-100">

        </section>
        <h1 className="title" style={{textAlign:'center',fontSize:'45px'}}>Price Plans</h1>
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
                        <Button variant="success" style={{float:'right'}}>Choose this plan</Button>
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
                        <Button variant="success" style={{float:'right'}}>Choose this plan</Button>
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
                        <Button variant="success" style={{float:'right'}}>Choose this plan</Button>

                    </Card.Body>
                </Card>
            </div>
        </div>
        <section className="freearea-300">

        </section>
        </>
    )
}
