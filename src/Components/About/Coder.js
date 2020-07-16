import React from 'react'
import {useState} from 'react'
import {Row,Container, Col,Image,Carousel} from 'react-bootstrap'
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
                        <h1 variant="danger" style={{fontSize:"4rem", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-block d-md-none ">Developers</h1>
                        <h1 variant="danger" style={{fontSize:"7rem", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-none d-md-block text-lg-left">Developers</h1>
                    </Col>

    <Container className="m-t-7" style={{marginTop:"5rem"}}> 
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
                <Carousel.Item>
                      <Row>
                          <Col xs={12} md={5}>
                              <Image  width="200" height="200" src="/assets/pankaj2.png" alt="developer" className="img-fluid" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px"}} roundedCircle></Image>
                          </Col>
                          <Col xs={12} md={6} className="">
                          <h2 variant="danger" style={{fontSize:"30px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-block d-md-none text-lg-left">Pankaj Jain</h2>
                          <h2 variant="danger" style={{fontSize:"40px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-none d-md-block text-lg-left">Pankaj Jain</h2>
                          <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"18px"}} className="d-block d-md-none text-lg-left">Pankaj Jain is the chairman & CEO of KunjiOfSuccess, a modern-day media and communications holding company and full-service marketing agency servicing clients across the various locations.</p>
                          <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}} className="d-none d-md-block text-justify">Pankaj Jain is the chairman & CEO of KunjiOfSuccess, a modern-day media and communications holding company and full-service marketing agency servicing clients across the various locations.</p>
                          <div className="text-lg-left d-block d-md-none"><span><a href="https://google.com"><i className="fa fa-instagram card-icons text-lg-left" aria-hidden="true" style={{fontSize:"2rem",padding:"1.3rem"}}></i></a></span> <span><a href="https://google.com"><i className="fa fa-linkedin card-icons text-lg-left" aria-hidden="true" style={{fontSize:"2rem"}}></i></a></span></div>
                          <div className="text-lg-left d-none d-md-block"><span><a href="https://google.com" style={{fontSize:"2.6rem",padding:"0 0.6rem 0 0.6rem"}}><i className="fa fa-instagram card-icons text-lg-left" aria-hidden="true" ></i></a></span> <span><a href="https://google.com" ><i className="fa fa-linkedin card-icons text-lg-left" aria-hidden="true" style={{fontSize:"3rem",padding:"0 0.6rem 0 0.6rem"}}></i></a></span></div>
                          </Col>
                          
                      </Row>
                </Carousel.Item>

                <Carousel.Item>
                <Row>
                          <Col xs={12} md={5}>
                              <Image width="200" height="200" src="/assets/ali.jpg" alt="developer" className="img-fluid" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px"}} roundedCircle></Image>
                          </Col>
                          <Col xs={12} md={6} className="">
                          <h2 variant="danger" style={{fontSize:"30px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-block d-md-none text-lg-left">Ali</h2>
                          <h2 variant="danger" style={{fontSize:"40px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-none d-md-block text-lg-left">Ali</h2>
                          <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"18px"}} className="d-block d-md-none text-lg-left">Ali is highly self motivated web developer who spends most of time building applications, Teaching Others and Loppinf myself upto date with latet technologies</p>
                          <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}} className="d-none d-md-block text-justify">Ali is highly self motivated web developer who spends most of time building applications, Teaching Others and Loppinf myself upto date with latet technologies</p>
                          <div className="text-lg-left d-block d-md-none"><span><a href="https://google.com"><i className="fa fa-instagram card-icons text-lg-left" aria-hidden="true" style={{fontSize:"2rem",padding:"1.3rem"}}></i></a></span> <span><a href="https://google.com"><i className="fa fa-linkedin card-icons text-lg-left" aria-hidden="true" style={{fontSize:"2rem"}}></i></a></span></div>
                          <div className="text-lg-left d-none d-md-block"><span><a href="https://google.com" style={{fontSize:"2.6rem",padding:"0 0.6rem 0 0.6rem"}}><i className="fa fa-instagram card-icons text-lg-left" aria-hidden="true" ></i></a></span> <span><a href="https://google.com" ><i className="fa fa-linkedin card-icons text-lg-left" aria-hidden="true" style={{fontSize:"3rem",padding:"0 0.6rem 0 0.6rem"}}></i></a></span></div>
                          </Col>
                          
                      </Row>
                          
                          
                </Carousel.Item>

                <Carousel.Item>
                      <Row>
                          <Col xs={12} md={5}>
                              <Image width="200" height="200" src="/assets/wilber.png" className="img-fluid" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px"}} roundedCircle></Image>
                              {/*Change Ramsai photo */}
                          </Col>
                          <Col xs={12} md={6} className="">
                            <h2 variant="danger" style={{fontSize:"30px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-block d-md-none text-lg-left">Ramasai Dandamudi</h2>
                            <h2 variant="danger" style={{fontSize:"40px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-none d-md-block text-lg-left">Ramasai Dandamudi</h2>
                            <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"18px"}} className="d-block d-md-none text-lg-left">I'm Ramasai Dandamudi and i'mAn Energetic , Enthusiastic , Hardworking , Responsible and self learning graduate student looking forward for a good opportunity  in order to secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills</p>
                            <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}} className="d-none d-md-block text-justify">I'm Ramasai Dandamudi and i'mAn Energetic , Enthusiastic , Hardworking , Responsible and self learning graduate student looking forward for a good opportunity  in order to secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills</p>
                            <div className="text-lg-left d-block d-md-none"><span><a href="https://google.com"><i className="fa fa-instagram card-icons text-lg-left" aria-hidden="true" style={{fontSize:"2rem",padding:"1.3rem"}}></i></a></span> <span><a href="https://google.com"><i className="fa fa-linkedin card-icons text-lg-left" aria-hidden="true" style={{fontSize:"2rem"}}></i></a></span></div>
                            <div className="text-lg-left d-none d-md-block"><span><a href="https://google.com"><i className="fa fa-instagram card-icons text-lg-left" aria-hidden="true" style={{fontSize:"2.6rem",padding:"0 0.6rem 0 0.6rem"}}></i></a></span> <span><a href="https://google.com" ><i className="fa fa-linkedin card-icons text-lg-left" aria-hidden="true" style={{fontSize:"3rem",padding:"0 0.6rem 0 0.6rem"}}></i></a></span></div>
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
