import React from 'react'
import { MDBBtn, MDBCard,MDBContainer, MDBRow, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
const portfolio=[
    {
         "src":"https://image.freepik.com/free-psd/coronavirus-instagram-stories-template-with-photo_23-2148484432.jpg",
        "client":"https://www.instagram.com/makhijabrothers/",
        "title":"COVID-19"
    },
    { 
        "src":"https://fernieweb.com/wp-content/uploads/2014/03/home-banner.jpg",
        "client":"https://www.instagram.com/kunjiofsuccess.uxui/",
        "title":"UI/UX"
    },
    { 
        "src":"https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/5653484/600/400/m2/fpnw/wm0/cm-north-wales-ig-stories-mock-upsartboard-1-.png?1546744036&s=c4479b71502197c0c53498ad262f8282",
        "client":"https://www.instagram.com/pennytravelr/",
        "title":"Travelling"
    },
    {
         "src":"https://i.pinimg.com/originals/b4/7d/46/b47d46d379f06ae5b0f4abde6f115fd0.jpg",
        "client":"https://www.instagram.com/grofitnutrition/",
        "title":"Fitness"
    },
    { 
        "src":"https://i.pinimg.com/originals/64/a7/a8/64a7a89966f42517e954655296aecc75.jpg",
        "client":"https://www.instagram.com/orgaliciousfoods/",
        "title":"Food"
    },
    { 
        "src":"https://elements-cover-images-0.imgix.net/2a0a9840-a6cf-4f5f-81fc-3d663dca74b8?auto=compress%2Cformat&fit=max&w=710&s=4b02467e486332eefaf07907cca064ff",
        "client":"https://www.instagram.com/madlol_yt/",
        "title":"Gaming"
    },
    { 
        "src":"https://motionarray.imgix.net/preview-226668-7pzCq30srw-high_0010.jpg",
        "client":"https://www.instagram.com/salasarfinance/",
        "title":"Financial"
    },
    { 
        "src":"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/132379246/original/b99b0d93be1fcc1e7fe538c0834e90aa580d2c93/design-hq-instagram-post-with-artwork.png",
        "client":"https://www.instagram.com/my999store/",
        "title":"E-commerce"
    },
    { 
        "src":"https://i.pinimg.com/originals/b5/6e/58/b56e58da89a54c3b50dff63ec27a6c4e.jpg",
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
       <MDBContainer style={{boxSizing:"border-box",padding:'20px'}}>
            <MDBRow>
                {card}
            </MDBRow>

        </MDBContainer>

    </>
        
        
    )       
}