import React from 'react'
import {Container,Card,Button,CardDeck,Modal} from 'react-bootstrap'
import { useState } from 'react';
import "../App.css";
import { MDBView } from "mdbreact";

export default function Services() {
    const [webshow, websetShow] = useState(false);
    const [onlineshow, onlinesetShow] = useState(false);
    const [socialshow, socialsetShow] = useState(false);

    const webhandleClose = () => websetShow(false);
    const webhandleShow = () => websetShow(true);
    const onlinehandleClose = () => onlinesetShow(false);
    const onlinehandleShow = () => onlinesetShow(true);
    const socialhandleClose = () => socialsetShow(false);
    const socialhandleShow = () => socialsetShow(true);
    return (
        <React.Fragment>
            <section  className="mt-5">
                <Container className="text-center" fluid>
                <h3 className="display-3 font-weight-bold mb-0 pt-md-5 d-none d-md-block">Let's Create</h3>
                <h5 className="display-4 font-weight-bold mb-0 pt-md-5 d-md-none">Let's Create</h5>
                <h5 className="subtext-header mt-2 mb-4 ">You think of an idea and we will help you turn that into business</h5>
                    <br/>
                    <br/>
                    
                    <MDBView className="d-none d-md-block">
                    <iframe title="let's create" width="70%" height="700" src="https://www.youtube.com/embed/PRgvVz-FxZI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope" allowfullscreen></iframe>
                    </MDBView>
                    <MDBView className="d-md-none">
                        {/* <video className="video-intro"  playsInline controls muted="" width="90%" height="auto" >
                        <source src="./assets/intro.mp4" type="video/mp4" />
                        </video> */}
                    <iframe title="let's create" width="100%" height="350" src="https://www.youtube.com/embed/PRgvVz-FxZI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope" allowfullscreen></iframe>

                    </MDBView>
                    {/* MDB VIEW */}
                </Container>
                <br/>
                <br/>
                <br/>
                <br/>
                <Container id="services" className="text-center">
                <h3 className="display-3 font-weight-bold mb-0 pt-md-5 d-none d-md-block">Our Services</h3>
                <h5 className="display-4 font-weight-bold mb-0 pt-md-5 d-md-none">Our Services{" "}</h5>
                <h5 className="subtext-header mt-2 mb-4 d-none d-md-block">We will help you with all your digital needs so that you can focus on your business.</h5>
                <br/>
                <br/>
                    <CardDeck className="text-center m-3">
                        <Card className="border border-danger card1">
                            <Card.Img variant="top" src="/assets/webdesigning.png" />
                            <Card.Body>
                                <Card.Title style={{fontSize:"25px"}}>Website Designing</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <Button variant="danger" id="web" onClick={webhandleShow} style={{fontSize:"18px", borderRadius:"25px", boxShadow:"0 10px 20px 0 rgba(0, 0, 0, 0.2)"}} 
                    onMouseOver={()=>document.getElementById('web').style.transform="scale(0.9)"} 
                    onMouseOut={()=>document.getElementById('web').style.transform="scale(1)"} ><i class="fa fa-play" aria-hidden="true"></i> Play</Button>
                            </Card.Footer>
                        </Card>
                        <Card className="border border-danger card1">
                            <Card.Img variant="top" src="/assets/marketing.png" />
                            <Card.Body>
                                <Card.Title style={{fontSize:"25px"}}>Online Marketing</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <Button variant="danger" id="online" onClick={onlinehandleShow} style={{fontSize:"18px", borderRadius:"25px", boxShadow:"0 10px 20px 0 rgba(0, 0, 0, 0.2)"}} 
                    onMouseOver={()=>document.getElementById('online').style.transform="scale(0.9)"} 
                    onMouseOut={()=>document.getElementById('online').style.transform="scale(1)"} > <i class="fa fa-play" aria-hidden="true"></i> Play</Button>
                            </Card.Footer>
                        </Card>
                        <Card className="border border-danger card1">
                            <Card.Img variant="top" src="/assets/social1.png" />
                            <Card.Body>
                            <Card.Title style={{fontSize:"25px"}}>Social Engagement</Card.Title>
                                <Card.Text >
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="danger" id="social" onClick={socialhandleShow} style={{fontSize:"18px", borderRadius:"25px", boxShadow:"0 10px 20px 0 rgba(0, 0, 0, 0.2)"}} 
                    onMouseOver={()=>document.getElementById('social').style.transform="scale(0.9)"} 
                    onMouseOut={()=>document.getElementById('social').style.transform="scale(1)"} ><i class="fa fa-play" aria-hidden="true"></i> Play</Button>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </Container>
            </section>
            <br/>
            <br/>
            <br/>
            <br/>
            {/* web designing modal */}
            <Modal show={webshow} onHide={webhandleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Web Designing | KunjiOfSuccess</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe title="web designing" width="100%" height="415" src="https://www.youtube.com/embed/JbGsRHq9OCw?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={webhandleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            {/* Online Marketing modal */}
            <Modal show={onlineshow} onHide={onlinehandleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Online Marketing | KunjiOfSuccess</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe title="Online Marketing" width="100%" height="415" src="https://www.youtube.com/embed/2k4_Bmoxf80?controls=0"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={onlinehandleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            {/* Social engagement modal */}
            <Modal show={socialshow} onHide={socialhandleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Social Engagement | KunjiOfSuccess</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe title="Social engagement" width="100%" height="415" src="https://www.youtube.com/embed/9QR6e8dmzGM?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={socialhandleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            
        </React.Fragment>
    )
}
