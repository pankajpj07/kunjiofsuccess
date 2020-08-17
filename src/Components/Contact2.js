import React, {Component} from 'react'
import {Button, Container, Row, Col} from 'react-bootstrap'
import "../Config"
import "../App.css";

export default class Contact2 extends Component {
       

    render(){

    return (
                <Container  className="text-center border border-grey" style={{marginTop:"165px",marginBottom:"165px", padding:"100px"}} id="contact2" >      
                    
                    <h2 variant="danger" style={{fontSize:"50px", fontFamily:'"AvenirNextBold", sans-serif'}}>MADE UP YOUR MIND?</h2>
                    <br/>
                    <Row>    
                        <Col >
                            <a href="https://wa.me/918010592093?text=I%27m%20interested" target="_blank" rel="noopener noreferrer"><Button type="submit" style={{padding:"17px 30px 17px 30px"}} >Let's Talk</Button></a>
                        </Col>
                    </Row>
                </Container>
                
                
            
    )
}
}