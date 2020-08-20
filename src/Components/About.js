import React from 'react'
import Hero from "./About/Hero";
import Coder from "./About/Coder";
import Designer from "./About/Designer";
import Writer from "./About/Writer";
import {Helmet } from "react-helmet"

const About=()=> {
    return (
        <>
        <Helmet>
          <title>KunjiOfSuccess: Empowering Startups, Creating Brands</title>
          <meta name="description" content="KunjiOfSuccess is a full-service digital marketing agency with highly creative and passionate experts for building a relationship between Brands & Customers through the combination of technology and communication." />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <Hero/>
        <Coder/>
        <Designer/>
        <Writer/> 
        </>
    )
}
export default About;
