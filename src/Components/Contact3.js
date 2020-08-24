import React,{Component} from "react";
import {  MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import {Modal,Button} from "react-bootstrap"
import ReactGA from "react-ga";
import "../Config"
import * as firebase from "firebase"

export default class Contact3 extends Component {
    state={
        name: "",
        email:"",
        phone: "",
        description:"",
        Business:"",
        show:false,
    }

    

    handleName=e=>{
        this.setState({name:e.target.value})
       // console.log(this.state.name);
        
    }

    handleDescription=e=>{
        this.setState({Business:e.target.value})
        
    }

    handleType=e=>{
        this.setState({description:e.target.value})
        
    }

    handleEmail=e=>{
        this.setState({email:e.target.value})
        
    }

    handlePhone=e=>{
            document.getElementById("phone").style.background="white"
            this.setState({phone:e.target.value})

    }


    handleSubmit=e=>{
        var time=new Date().toISOString()
        e.preventDefault()
        var phonePattern= /^(00|\+)?(91)?[9876][0-9]{9}$/
    
        if(this.state.name==="" && !this.state.phone==="")
        alert(" Name field is required")
        else if(this.state.phone==="" && !this.state.name==="")
        alert(" Phone field is required")
        else if(this.state.name==="" || this.state.phone==="")
        alert("All fields are required")

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

             this.recordSubmit();
             this.handleShow()
             
            // const data={
            //     name: this.state.name,
            //     email:this.state.email,
            //     phone: this.state.phone,
            //     description:this.state.description,
            //     Business:this.state.Business,
                
            // }
            // emailjs.sendForm("gmail", "template_VWyrkiEi", e.target, "user_TuQUHVr8uydx6aGkrtdVq")
            // .then((result) => {
            //     console.log(result.text);
            // }, (error) => {
            //     console.log(data);
            //     console.log(error.text);
            // });
           

        }
        
    }
    recordSubmit= () => {
        ReactGA.event({
          category: "Submit",
          action: "Contact Form Submitted"
        });
      };

    handleClose = () => this.setState({show:false})
    handleShow = () => this.setState({show:true})

render(){
  return (
    <MDBContainer className="boxing p-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5" >
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi
      </p>
      <MDBRow>
        <MDBCol md="9" className="md-0 mb-5">
          <form>
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-name" label="Name" onChange={this.handleName} />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="contact-email"
                    label=" Email"
                    onInput={this.handleEmail}
                  />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-subject" label=" Business"  onChange={this.handleType}  />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="phone" onInput={this.handlePhone} label="Phone Number" />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput
                    type="textarea"
                    id="contact-message"
                    label=" Business Description"
                    onChange={this.handleDescription}
                  />
                </div>
              </MDBCol>
            </MDBRow>
          </form>
          <div className="text-center text-md-left">
            <MDBBtn color="primary" size="md" onClick={this.handleSubmit} >
              Send
            </MDBBtn>
          </div>
        </MDBCol>
        <MDBCol md="3" className="text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
              <p>House no. 34, i1 Block, Phase I, Budh Vihar, New Delhi</p>
            </li>
            <li>
              <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
              <p> +918010592093</p>
            </li>
            <li>
              <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
              <p>pankaj12.pj88@gmail.com</p>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
      <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Whoopee!!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    We"re glad that you wanna be a part of our community. We got  details, will contact you shortly.
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={this.handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
    </MDBContainer>
  );
}
}

//export default ContactPage;