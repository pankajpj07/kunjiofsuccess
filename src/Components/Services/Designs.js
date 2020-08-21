import React from 'react'
import { MDBBtn, MDBCard,MDBContainer, MDBRow, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
const portfolio=[
    {
         "src":"./assets/Design_Images/1.png",
        "client":"https://www.instagram.com/makhijabrothers/",
        "title":"Cloth Store"
    },
    { 
        "src":"./assets/Design_Images/2.png",
        "client":"https://www.instagram.com/kunjiofsuccess.uxui/",
        "title":"Travelling "
    },
    { 
        "src":"./assets/Design_Images/3.png",
        "client":"https://www.instagram.com/pennytravelr/",
        "title":"Women's Wear"
    },
    {
         "src":"./assets/Design_Images/4.png",
        "client":"https://www.instagram.com/grofitnutrition/",
        "title":"Birds"
    },
    { 
        "src":"./assets/Design_Images/5.png",
        "client":"https://www.instagram.com/orgaliciousfoods/",
        "title":"Fitness"
    },
    { 
        "src":"./assets/Design_Images/6.png",
        "client":"https://www.instagram.com/madlol_yt/",
        "title":"Yoga Mobile UI"
    },
    { 
        "src":"./assets/Design_Images/7.png",
        "client":"https://www.instagram.com/salasarfinance/",
        "title":"Musical Concert"
    },
    { 
        "src":"./assets/Design_Images/8.png",
        "client":"https://www.instagram.com/my999store/",
        "title":"Nature"
    },
    { 
        "src":"./assets/Design_Images/1.png",
        "client":"https://www.instagram.com/officialgoldenkite/",
        "title":"Fashion"
    },

    ]

export default function Designs() {
    
    const card =portfolio.map((obj,ind)=>{
        return(
        // <div className="cards" key={ind}>
        //     <img src={obj.src} alt={obj.title}/>
        //     <div className="card-info">
        //         <h1 className="card-title">
        //             {obj.title}
        //         </h1>
        //         <a class="btn btn-success" href={obj.client} target="_blank" rel="noopener noreferrer" role="button">EXPLORE</a>

        //     </div>
        // </div>)
        <>
            <MDBCol size="4" className="d-none d-lg-block py-3 px-md-5">
              <MDBCard>
                <MDBCardImage className="img-fluid" src={obj.src}
                  waves />
                <MDBCardBody>
                  <MDBCardTitle>{obj.title}</MDBCardTitle>
                 <MDBCardText>We have worked with clients under {obj.title} category</MDBCardText>
                  <MDBBtn gradient="purple" href={obj.client} target="_blank">EXPLORE</MDBBtn>

                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol size="6" className="d-none d-md-block d-lg-none py-3 px-md-5">
              <MDBCard>
                <MDBCardImage className="img-fluid" src={obj.src}
                  waves />
                <MDBCardBody>
                  <MDBCardTitle>{obj.title}</MDBCardTitle>
                  <MDBCardText>We have worked with clients under {obj.title} category</MDBCardText>

                  <MDBBtn  gradient="purple" href={obj.client}target="_blank">EXPLORE</MDBBtn>

                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol size="12" className="d-block d-md-none py-3 px-md-5">
              <MDBCard>
                <MDBCardImage className="img-fluid" src={obj.src}
                  waves />
                <MDBCardBody>
                  <MDBCardTitle>{obj.title}</MDBCardTitle>
                  <MDBCardText>We have worked with clients under {obj.title} category</MDBCardText>

                  <MDBBtn gradient="purple"  href={obj.client} target="_blank">EXPLORE</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            
        </>
        
        
  
        )
    })
    return (<>
       <MDBContainer fluid style={{boxSizing:"border-box",padding:'20px'}}>
            <MDBRow>
                {card}
            </MDBRow>

        </MDBContainer>

    </>
        
        
    )       
}
