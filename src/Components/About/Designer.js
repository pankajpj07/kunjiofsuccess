import React from 'react'
import {useState} from 'react'
import {Row,Container, Col,Image,Carousel} from 'react-bootstrap'
function Designer() {
        // Desginer Section
        const [index, setIndex] = useState(0);
        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };
    return (
    <>
    <Container fluid className="text-center" style={{marginTop:"5rem"}}>
        <Row className="pt-5">
            <Col xs={12} md={12} lg={12} >
                <h1 variant="danger" style={{fontSize:"4rem", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-block d-md-none ">UI/UX Designer</h1>
                <h1 variant="danger" style={{fontSize:"7rem", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-none d-md-block text-lg-left">UI/UX Designer</h1>
            </Col>

            <Container className="m-t-7" style={{marginTop:"5rem"}}> 
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} interval={7000}>
                <Carousel.Item>
                        <Row>
                            <Col xs={12} md={5}>
                                <Image width="200" height="200" src="/assets/UX/subham1.jpg" className="img-fluid" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px"}} roundedCircle></Image>
                            </Col>
                            <Col xs={12} md={6} className="">
                            <h2 variant="danger" style={{fontSize:"30px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-block d-md-none text-lg-left">Wilber Brandon</h2>
                            <h2 variant="danger" style={{fontSize:"40px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-none d-md-block text-lg-left">Wilber Brandon</h2>
                            <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"18px"}} className="d-block d-md-none text-lg-left">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor</p>
                            <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}} className="d-none d-md-block text-justify">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor</p>
                            <ul className="social-network social-circle text-left"> 
                              <li>
                                    <a href="https://www.facebook.com/Kunjiofsuccess-110280730654877/" className="icoFacebook" title="Facebook">
                                      <i class="fa fa-facebook"/>
                                    </a>
                              </li>
                              <li>
                                    <a href="https://www.linkedin.com/company/kunjiofsuccess/" className="icoLinkedin " title="Linkedin">
                                      <i class="fa fa-linkedin"/>
                                    </a>
                              </li>
                              
                          </ul>
                          </Col>
                        </Row>   
                </Carousel.Item>

                <Carousel.Item>
                        <Row>
                            <Col xs={12} md={5}>
                                <Image width="200" height="200" src="/assets/ux/shweta.jpeg" className="img-fluid" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px"}} roundedCircle></Image>
                            </Col>
                            <Col xs={12} md={6} className="">
                            <h2 variant="danger" style={{fontSize:"30px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-block d-md-none text-lg-left">Shweta Bansal</h2>
                            <h2 variant="danger" style={{fontSize:"40px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-none d-md-block text-lg-left">Shweta Bansal</h2>
                            <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"18px"}} className="d-block d-md-none text-lg-left">Shweta Bansal is serving as CFO for KunjiOfSuccess. She is highly motivated in what she does and keep up with the latest finance management tools for eficiency and productivity of the company.</p>
                            <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}} className="d-none d-md-block text-justify">Shweta Bansal is serving as CFO for KunjiOfSuccess. She is highly motivated in what she does and keep up with the latest finance management tools for eficiency and productivity of the company.</p>
                            <ul className="social-network social-circle text-left"> 
                              <li>
                                    <a href="https://www.facebook.com/Kunjiofsuccess-110280730654877/" className="icoFacebook" title="Facebook">
                                      <i class="fa fa-facebook"/>
                                    </a>
                              </li>
                              <li>
                                    <a href="https://www.linkedin.com/company/kunjiofsuccess/" className="icoLinkedin " title="Linkedin">
                                      <i class="fa fa-linkedin"/>
                                    </a>
                              </li>
                              
                          </ul>
                          </Col>
                        </Row>     
                </Carousel.Item>

                <Carousel.Item>
                        <Row>
                            <Col xs={12} md={5}>
                                <Image width="200" height="200" src="/assets/ux/akash.jpeg" className="img-fluid" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px"}} roundedCircle></Image>
                            </Col>
                            <Col xs={12} md={6} className="">
                            <h2 variant="danger" style={{fontSize:"30px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-block d-md-none text-lg-left">Akash</h2>
                            <h2 variant="danger" style={{fontSize:"40px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-none d-md-block text-lg-left">Akash</h2>
                            <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"18px"}} className="d-block d-md-none text-lg-left">I am a UX/UI designer, always looking to learn something new. I am a self taught designer, apart from designing I enjoy reading books and studying about latest technologies and cars.</p>
                            <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}} className="d-none d-md-block text-justify">I am a UX/UI designer, always looking to learn something new. I am a self taught designer, apart from designing I enjoy reading books and studying about latest technologies and cars.</p>
                            <ul className="social-network social-circle text-left"> 
                              <li>
                                    <a href="https://www.facebook.com/Kunjiofsuccess-110280730654877/" className="icoFacebook" title="Facebook">
                                      <i class="fa fa-facebook"/>
                                    </a>
                              </li>
                              <li>
                                    <a href="https://www.linkedin.com/company/kunjiofsuccess/" className="icoLinkedin " title="Linkedin">
                                      <i class="fa fa-linkedin"/>
                                    </a>
                              </li>
                              
                          </ul>
                          </Col>
                        </Row>
                </Carousel.Item>   
        </Carousel>
        
        </Container>
        </Row>
    </Container>
    
        </>
    );
}

export default Designer
