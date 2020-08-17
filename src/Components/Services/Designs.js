import React,{useState} from 'react'
import './designs.css'
const portfolio=[
    {
         "src":"https://image.freepik.com/free-vector/photography-instagram-stories-template-collection_52683-11439.jpg",
        "title":"Photography"
    },
    { 
        "src":"https://i.pinimg.com/originals/34/a9/36/34a9368b1a1c7a4d5fb025c75108c246.jpg",
        "title":"Interior"
    },
    { 
        "src":"https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/5653484/600/400/m2/fpnw/wm0/cm-north-wales-ig-stories-mock-upsartboard-1-.png?1546744036&s=c4479b71502197c0c53498ad262f8282",
        "title":"Travelling"
    },
    {
         "src":"https://i.pinimg.com/originals/b4/7d/46/b47d46d379f06ae5b0f4abde6f115fd0.jpg",
        "title":"Fitness"
    },
    { 
        "src":"https://i.pinimg.com/originals/64/a7/a8/64a7a89966f42517e954655296aecc75.jpg",
        "title":"Food"
    },
    { 
        "src":"https://image.freepik.com/free-psd/liquid-pastel-brown-fashion-social-media-banner-instagram-templates_158757-15.jpg",
        "title":"Fashion"
    },
    { 
        "src":"https://i.pinimg.com/originals/0e/86/eb/0e86eb6df3714582f5601f22030648e2.jpg",
        "title":"Quotes"
    },
    { 
        "src":"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/132379246/original/b99b0d93be1fcc1e7fe538c0834e90aa580d2c93/design-hq-instagram-post-with-artwork.png",
        "title":"Sales & Store"
    },
    { 
        "src":"https://image.freepik.com/free-vector/green-plant-instagram-stories-template_104237-70.jpg",
        "title":"Plants"
    },

    ]

export default function Designs() {
    const [dispDesign,setDesign]=useState('')
    const showDesign=(event)=>{
            setDesign(portfolio[Number(event.target.id)].src)
    }
    const card =portfolio.map((obj,ind)=>{
        return(<div className="cards" key={ind}>
            <img src={obj.src} alt={obj.title} height="200px" width="200px"/>
            <div className="card-info">
                <h1 className="card-title">
                    {obj.title}
                </h1>
                <button id={ind} onClick={showDesign}>preview</button>
            </div>
        </div>)
    })
    return (<>
       <section class="containers">
           {card}
       </section>
    </>
        
    )
}
