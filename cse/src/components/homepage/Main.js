import React from 'react';

import Typewriter from 'typewriter-effect';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import slider1 from '../../assets/homepage/img/slider1.jpg'
import slider2 from '../../assets/homepage/img/slider2.jpg'
import slider3 from '../../assets/homepage/img/slider3.jpg'
import slider4 from '../../assets/homepage/img/slider4.jpg'
import slider5 from '../../assets/homepage/img/slider5.jpg'


const Main = () => {
   
    

    return ( 
        <div className=" homepage-main " >
           <div className="col-12" >
                <div className="row justify-content-center align-items-center  ">
                     <OwlCarousel   
                                items={1}
                                autoplay ={true}
                                loop={true} 
                               
                                style={{textAlign:'center'}}>  

                    <div className="col-12 item px-0 py-0"> <img className="mainimage" src={slider4}  alt=""/></div>
                    <div className="col-12 item px-0 py-0"> <img className="mainimage" src={slider5}  alt=""/></div>
                    <div className="col-12 item px-0 py-0"> <img className="mainimage" src={slider4}  alt=""/></div>
                    <div className="col-12 item px-0 py-0"> <img className="mainimage" src={slider5}  alt=""/></div>
                    <div className="col-12 item px-0 py-0"> <img className="mainimage" src={slider4}  alt=""/></div>

                </OwlCarousel>
               
                    <div className="homepage-main-heading col-12 col-md-7 mt-5 pt-5 pt-md-0 mt-xl-0  pb-5 mb-md-3">
                        <h1 >
                        <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('WELCOME!')
                                    
                                    .pauseFor(2500)
                                    .deleteChars(8)
                                    typewriter.typeString('DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING.')
                                    
                                    .start();
                                }}
                                />
                            
                        </h1>
                        
                    </div>              
                </div>
               
            </div>
        </div>
     );
}

export default Main;