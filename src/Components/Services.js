import React from 'react'
import "../App.css";
import 'aos/dist/aos.css';

export default function Services() {
    

   
    return (<>

<div className="container-fluid my-5" >

  <section id="services">


    <h1 className=" h1-responsive" style={{textAlign:'center'}}>Our Services</h1>

    <p className="lead text-center text-muted pt-2 mb-5">Join thousands of satisfied customers using our services
      globally.</p>

    <div class="row text-center">

      <div className="col-md-6  col-xl-6 mb-4">
        <div className="card text-center bg-success text-white">
          <div className="card-body">
            <p className="mt-4 pt-2"><i className="far fa-object-ungroup fa-4x"></i></p>
            <h5 className="font-weight-normal my-4 py-2"><a className="text-white" href="web">Website Designing</a></h5>
            <p className="mb-4">The different areas of web design include web graphic design, interface design, user experience design and search engine optimization</p>
          </div>
        </div>
      </div>

      <div className="col-md-6   col-xl-6 mb-4">
        <div className="card text-center">
          <div className="card-body">
            <p className="mt-4 pt-2"><i className="fas fa-mobile-alt fa-4x grey-text"></i></p>
            <h5 className="font-weight-normal my-4 py-2"><a className="dark-grey-text" href="web">Mobile App</a></h5>
            <p className="text-muted mb-4">A mobile application is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch.</p>
          </div>
        </div>
      </div>

      <div className="col-md-6   col-xl-6 mb-4">
        <div className="card text-center deep-purple lighten-1 text-white">
          <div className="card-body">
            <p className="mt-4 pt-2"><i className="fas fa-chart-line fa-4x"></i></p>
            <h5 className="font-weight-normal my-4 py-2"><a className="text-white" href="/social">Digital Marketing</a></h5>
            <p className="mb-4">Digital marketing utilizes online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services</p>
          </div>
        </div>
      </div>

      <div className="col-md-6   col-xl-6">
        <div className="card text-center">
          <div className="card-body">
            <p className="mt-4 pt-2"><i className="fas fa-bullhorn fa-4x grey-text"></i></p>
            <h5 className="font-weight-normal my-4 py-2"><a className="dark-grey-text" href="/social">Social Media Management</a></h5>
            <p className="text-muted mb-4">We manage your online presence on social media platforms like Facebook, Instagram, and Twitter by creating, publishing, and analyzing content you post.</p>
          </div>
        </div>
      </div>

    </div>

  </section>
        
  



</div>
<br/>
  <br/>
            
        </>
    )
}
