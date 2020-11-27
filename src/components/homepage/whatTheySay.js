import React from 'react';

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
 
import img1 from '../../assets/homepage/img/kartik.jpg'
import img2 from '../../assets/homepage/img/ankit.jpg'

import Item from './WhatTheySayCard';


const options={
  
    responsive:{
        0:{
            items:1,
        },
    766:{
        items:2,
    },
    
},
};

const WhatTheySay = (props) => {
    return ( 
        <div className="homepage-whattheysay col-12 mt-5">
            <div className="container ">
            <div className="row justify-content-center align-items-center">
                <div className="homepage-whattheysay-reviewcard col-8 col-lg-3 mt-0">
                    <div className="row jusitfy-content-center">
                    <img className="homepage-whattheysay-card-image col-12 px-0" src={props.Review} style={{height:'70'}} alt=""/>
                        <h1>What They Say?</h1>
                        <p>We provide a platform to the <br/><span style={{fontWeigth:'bolder'}}>Students </span> 
                            for their overall <span style={{fontWeigth:'bolder'}}>Growth</span><br/>
                        </p>
                    </div>
                </div>
                <div className="homepage-whattheysay-slider col-12 col-lg-8  mt-5 pt-5">
                    <OwlCarousel  {...options} margin={0} autoplay ={true} loop={true}   autoplayHoverPause={true} >  
                         
                        
                        <div className="item col-12 px-2"><Item name="Kartik Malikheight: 100%;height: 100%;height: 100%;" post="frontend developer" photo={img1}/></div>
                        <div className="item col-12 px-2"><Item name="Ankit Raj" post="frontend developer" photo={img2}/></div>
                        <div className="item col-12 px-2"><Item name="Kartik Malik" post="frontend developer" photo={img1}/></div>
                        <div className="item col-12 px-2"><Item name="Ankit Raj" post="frontend developer" photo={img2}/></div>
                      

                    </OwlCarousel> 
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default WhatTheySay;