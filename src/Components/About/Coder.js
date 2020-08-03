import React from 'react'
import {useState} from 'react'
import {Row,Container, Col,Image,Carousel} from 'react-bootstrap'
import "../../App.css";

function Coder() { 
    // Coder carousel
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
    <>
  <Container fluid className="text-center">
      <Row className="pt-5">
      <Col xs={12} md={12} lg={12} >
      <h1 variant="danger" style={{fontSize:"4rem", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder", wordWrap:"break-word"}} className="color d-block d-md-none ">Developers</h1>
      <h1 variant="danger" style={{fontSize:"7rem", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder",wordWrap:"break-word"}} className="color d-none d-md-block text-lg-left">Developers</h1>
  </Col>

    <Container className="m-t-7" style={{marginTop:"5rem"}}> 
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
                <Carousel.Item>
                      <Row>
                          <Col xs={12} md={5}>
                              <Image  width="200" height="200" src="/assets/dev/pankaj3.jpg" alt="developer" className="img-fluid" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px"}} roundedCircle></Image>
                          </Col>
                          <Col xs={12} md={6} className="">
                          <h2 variant="danger" style={{fontSize:"30px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-block d-md-none text-lg-left">Pankaj Jain</h2>
                          <h2 variant="danger" style={{fontSize:"40px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-none d-md-block text-lg-left">Pankaj Jain</h2>
                          <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"18px"}} className="d-block d-md-none text-lg-left">Pankaj Jain is the chairman & CEO of KunjiOfSuccess, a modern-day media and communications holding company and full-service marketing agency servicing clients across the various locations.</p>
                          <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}} className="d-none d-md-block text-justify">Pankaj Jain is the chairman & CEO of KunjiOfSuccess, a modern-day media and communications holding company and full-service marketing agency servicing clients across the various locations.</p>
                          <ul className="social-network social-circle text-left"> 
                              <li>
                                        <a href="https://www.instagram.com/mai_hun_pj/" className="icoInstagram" title="Instagram">
                                          <i class="fa fa-instagram"/>
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
                              <Image width="200" height="200" src="/assets/dev/ali.jpg" alt="developer" className="img-fluid" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px"}} roundedCircle></Image>
                          </Col>
                          <Col xs={12} md={6} className="">
                          <h2 variant="danger" style={{fontSize:"30px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-block d-md-none text-lg-left">Shekh Aliul</h2>
                          <h2 variant="danger" style={{fontSize:"40px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-none d-md-block text-lg-left">Shekh Aliul</h2>
                          <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"18px"}} className="d-block d-md-none text-lg-left">Shekh Aliul is highly self motivated web developer who spends most of time building applications, Teaching Others and Lopping himself upto date with latest technologies</p>
                          <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}} className="d-none d-md-block text-justify">Shekh Aliul is highly self motivated web developer who spends most of time building applications, Teaching Others and Lopping himself upto date with latest technologies</p>
                          <ul className="social-network social-circle text-left"> 
                              <li>
                                    <a href="https://www.instagram.com/aliii___19/" className="icoInstagram" title="Instagram">
                                      <i class="fa fa-instagram"/>
                                    </a>
                              </li>
                              <li>
                                    <a href="https://www.linkedin.com/in/shekh-aliul/" className="icoLinkedin " title="Linkedin">
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
                              <Image width="200" height="200" src="/assets/dev/nishant.jpeg" className="img-fluid" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px"}} roundedCircle></Image>
                              {/*Change Ramsai photo */}
                          </Col>
                          <Col xs={12} md={6} className="">
                            <h2 variant="danger" style={{fontSize:"30px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-block d-md-none text-lg-left">Nishat</h2>
                            <h2 variant="danger" style={{fontSize:"40px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-none d-md-block text-lg-left">Nishant</h2>
                            <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"18px"}} className="d-block d-md-none text-lg-left">Nishant Thakur is working as Developer for KunjiofSuccess. He is highy workoholic person in our team. Every problem he has a solution.</p>
                            <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}} className="d-none d-md-block text-justify">Nishant Thakur is working as Developer for KunjiofSuccess. He is highy workoholic person in our team. Every problem he has a solution.</p>
                            <ul className="social-network social-circle text-left"> 
                            <li>
                                    <a href="https://www.instagram.com/mai_hun_pj/" className="icoInstagram" title="Instagram">
                                      <i class="fa fa-instagram"/>
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

export default Coder
