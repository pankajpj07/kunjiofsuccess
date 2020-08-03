import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'



export class Clients extends React.Component {


    render(){
        
        return(<Container className="text-center">
                    <h3 className="display-4 font-weight-bold mb-0 pt-md-5 d-none d-md-block">Our Clients</h3>
                    <h5 className="display-4 font-weight-bold mb-0 pt-md-5 d-md-none">Our Clients</h5>
                    
                    <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}} className="d-none d-md-block">We are working with 10+ clients. Some of our selected clients are as below</p>
                    <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"18px"}} className="d-block d-md-none">We are working with 10+ clients. Some of our selected clients are as below</p>
                    <br/>
                    <br/>
                    

                    <Row >
                        <Col xs={12} md={4} lg={4}  className="mt-5">
                            <Image width="150px" src="./assets/sp.jpg"  style={{ borderRadius:"25px", boxShadow:"0 10px 20px 0 rgba(0, 0, 0, 0.2)"}} roundedCircle/>
                        </Col>
                        <Col xs={12} md={4} lg={4}   className="mt-5">
                            <Image width="150px" src="./assets/rivertab.jpg"  style={{ borderRadius:"25px", boxShadow:"0 10px 20px 0 rgba(0, 0, 0, 0.2)"}} roundedCircle/>
                        </Col>
                        <Col xs={12} md={4} lg={4}  className="mt-5">
                            <Image width="150px" src="./assets/bigtyme.jpg"  style={{ borderRadius:"25px", boxShadow:"0 10px 20px 0 rgba(0, 0, 0, 0.2) "}} roundedCircle/>
                
                        </Col>
                        
                    </Row>
                
                </Container>

        )
            
            
            }
}


export default Clients
