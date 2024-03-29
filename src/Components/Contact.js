import React, {Component} from 'react'
import {Button, Container, Row, Col, Form, Modal} from 'react-bootstrap'
import "../Config"
import ReactGA from 'react-ga'
import * as firebase from "firebase"

export default class Contact extends Component {
        state={
            name: "",
            phone: "",
            show:false,
        }
        

        handleName=e=>{
            this.setState({name:e.target.value})
           // console.log(this.)
            
        }

        handlePhone=e=>{
                document.getElementById("phone").style.background="white"
                this.setState({phone:e.target.value})

        }

        handleSubmit=e=>{
            var time=new Date().toISOString()
            e.preventDefault()
            ReactGA.event({
                category: "Contact Form ",
                action: "Bottom Contact Form  Submitted!",
                transport: 'beacon'
              });
            var phonePattern= /^(00|\+)?(91)?[9876][0-9]{9}$/
            if(this.state.name==="" || this.state.phone==="")
                alert("Both fields are required")
            else if(!phonePattern.test(this.state.phone)){
                document.getElementById("phone").style.background="red"
                document.getElementById("phone").style.color="black"
            }
            else
            {
                firebase.database()
                .ref("clients")
                .push(
                    {
                        name:this.state.name,
                        phone:this.state.phone,
                        date:time,
                    }
                )
                this.handleShow()
               

            }
            
        }

        handleClose = () => this.setState({show:false})
        handleShow = () => this.setState({show:true})

    render(){

    return (
            <Container className="text-center" style={{marginTop:"165px",marginBottom:"165px"}} id="contact"> 
              <br/>
            <br/>
            <br/>   
                
            <h3 className="display-4 font-weight-bold mb-0 pt-md-5 d-none d-md-block">LET'S WORK TOGETHER{" "}</h3>
            <h5 className="display-4 font-weight-bold mb-0 pt-md-5 d-md-none">Contact Us</h5>
            <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}}>We love working with smart people. Set your idea as an example to the world!</p>
            <hr/>
            <Form>
                <Row>
                    <Col> 

                    </Col>
                    <Col  xs={12} md={4} className="mt-2 " >
                        <Form.Control type="text" placeholder="Name" style={{padding:"25px" }} onInput={this.handleName} required/>
                    </Col>
                    <Col xs={12} md={4} className="mt-2">
                        <Form.Control type="text" placeholder="Phone Number" style={{padding:"25px" }} id="phone" onInput={this.handlePhone} required/>
                    </Col>
                    <Col> 

                    </Col>
                </Row>
                <br/>
                <Row>    
                <Col >
                    <Button type="submit" style={{padding:"20px", borderRadius:"25px"}} onClick={this.handleSubmit}>START A PROJECT</Button>
                </Col>
                </Row>
            </Form>
            <br/>
            <br/>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Whoopee!!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    We're glad that you wanna be a part of our community. We got your details, will contact you shortly.
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={this.handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            </Container>
    )
}
}