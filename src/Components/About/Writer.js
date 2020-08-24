import React from 'react'
import {useState} from 'react'
import ReactGA from 'react-ga'
import {Row,Container, Col,Image,Carousel} from 'react-bootstrap'

function Writer(){ // Contentwiters Carousel
const [index, setIndex] = useState(0);
const handleSelect = (selectedIndex, e) => {
setIndex(selectedIndex);
};

const dhruvikInstagram= () => {
  ReactGA.event({
    category: "About",
    action: "dhruvik Instagram profile viewed",
    transport: 'beacon'
  });
}
  const dhruvikLinkedin= () => {
    ReactGA.event({
      category: "About",
      action: "dhruvik Linkedin profile viewed",
      transport: 'beacon'
    });
  };
;

const ramsaiInstagram= () => {
  ReactGA.event({
    category: "About",
    action: "ramsai Instagram profile viewed",
    transport: 'beacon'
  });
}
  const ramsaiLinkedin= () => {
    ReactGA.event({
      category: "About",
      action: "ramsai Linkedin profile viewed",
      transport: 'beacon'
    });
  };
;

const sampreethInstagram= () => {
  ReactGA.event({
    category: "About",
    action: "sampreeth Instagram profile viewed",
    transport: 'beacon'
  });
}
  const sampreethLinkedin= () => {
    ReactGA.event({
      category: "About",
      action: "sampreeth Linkedin profile viewed",
      transport: 'beacon'
    });
  };
return (
<>
<Container fluid className="text-center" style={{marginTop:"5rem",marginBottom:"5rem"}}>
                <Row className="pt-5">
                <Col xs={12} md={12} lg={12} >
                <h1 variant="danger" style={{fontSize:"4rem", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-block d-md-none ">Content Creators</h1>
                <h1 variant="danger" style={{fontSize:"7rem", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className=" color d-none d-md-block text-lg-left">Content Creators</h1>
                </Col>

                <Container className="m-t-7" style={{marginTop:"5rem"}}> 
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} interval={7000}>
                <Carousel.Item>
                    <Row>
                        <Col xs={12} md={5}>
                            <Image width="200" height="200" src="/assets/marketing/dhruvik.jpg" className="img-fluid" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px"}} roundedCircle></Image>
                        </Col>
                        <Col xs={12} md={6} className="">
                        <h2 variant="danger" style={{fontSize:"30px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-block d-md-none text-lg-left">Dhruvik Patel</h2>
                        <h2 variant="danger" style={{fontSize:"40px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className=" color d-none d-md-block text-lg-left">Dhruvik Patel</h2>
                        <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"18px"}} className="d-block d-md-none text-lg-left">Dhruvik Patel is on Internship with Kunji of Success. He is working on content and marketing for the firm. Apart from that he also like to manage the work in proper manner.</p>
                        <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}} className="d-none d-md-block text-justify">Dhruvik Patel is on Internship with Kunji of Success. He is working on content and marketing for the firm. Apart from that he also like to manage the work in proper manner.</p>
                        <ul className="social-network social-circle text-left"> 
                                <li>
                                        <a href="https://www.instagram.com/mai_hun_pj/" className="icoInstagram" title="Instagram" onClick={dhruvikInstagram}>
                                          <i class="fa fa-instagram"/>
                                        </a>
                                  </li>
                              <li>
                                    <a href="https://www.linkedin.com/company/kunjiofsuccess/" className="icoLinkedin " title="Linkedin" onClick={dhruvikLinkedin}>
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
                            <Image width="200" height="200" src="/assets/marketing/ramsai.jpg" className="img-fluid" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px"}} roundedCircle></Image>
                        </Col>
                        <Col xs={12} md={6} className="">
                        <h2 variant="danger" style={{fontSize:"30px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-block d-md-none text-lg-left">Ramsai Dandamundi</h2>
                        <h2 variant="danger" style={{fontSize:"40px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-none d-md-block text-lg-left">Ramsai Dandamundi</h2>
                        <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"18px"}} className="d-block d-md-none text-lg-left">Ramasai is energetic , hardworking and self learning student looking forward for a good opportunity in order to secure a challenging position in a reputable organization to expand his learnings, knowledge, and skills.</p>
                        <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}} className="d-none d-md-block text-justify">Ramasai is energetic , hardworking and self learning student looking forward for a good opportunity in order to secure a challenging position in a reputable organization to expand his learnings, knowledge, and skills</p>
                        <ul className="social-network social-circle text-left"> 
                                <li>
                                        <a href="https://www.instagram.com/mai_hun_pj/" className="icoInstagram" title="Instagram" onClick={ramsaiInstagram}>
                                          <i class="fa fa-instagram"/>
                                        </a>
                                  </li>
                              <li>
                                    <a href="https://www.linkedin.com/company/kunjiofsuccess/" className="icoLinkedin " title="Linkedin" onClick={ramsaiLinkedin}>
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
                            <Image width="200" height="200" src="/assets/marketing/sam.jpg" className="img-fluid" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px"}} roundedCircle></Image>
                        </Col>
                        <Col xs={12} md={6} className="">
                        <h2 variant="danger" style={{fontSize:"30px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-block d-md-none text-lg-left">Sampreeth</h2>
                        <h2 variant="danger" style={{fontSize:"40px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-none d-md-block text-lg-left">Sampreeth</h2>
                        <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"18px"}} className="d-block d-md-none text-lg-left">Sampreeth is a driven and motivated team worker. He can learn and adapt to new things in no time. Give him a task and consider it done. He can develop amazing content for business related pages, design logo, SMM and much more.</p>
                        <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}} className="d-none d-md-block text-justify">Sampreeth is a driven and motivated team worker. He can learn and adapt to new things in no time. Give him a task and consider it done. He can develop amazing content for business related pages, design logo, SMM and much more.</p>
                        <ul className="social-network social-circle text-left"> 
                                <li>
                                        <a href="https://www.instagram.com/mai_hun_pj/" className="icoInstagram" title="Instagram" onClick={sampreethInstagram}>
                                          <i class="fa fa-instagram"/>
                                        </a>
                                  </li>
                              <li>
                                    <a href="https://www.linkedin.com/company/kunjiofsuccess/" className="icoLinkedin " title="Linkedin" onClick={sampreethLinkedin}>
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

export default Writer
