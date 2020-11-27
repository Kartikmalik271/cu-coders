import React from 'react';

import ourvalueimg from '../../assets/aboutus/img/ourvalues.png'
import verticalbar from '../../assets/aboutus/img/verticalbar.png'


const OurValues = () => {
    return ( 
        <div className="aboutus-ourvalues col-12 mb-5">
<img className="aboutus-ourvalues-verticalbar d-none d-xl-block" src={verticalbar} alt=""/>

            <div className="row justify-content-center align-items-center">
                <img className=" col-12 col-md-8 col-xl-5 mt-5" src={ourvalueimg} alt=""/>
                  <div className="aboutus-ourvalues-content col-12 col-xl-6 mr-md-auto">
                  <h1 className="pl-5 mb-4 mt-5"style={{ fontWeight:'bold', fontSize:'40', textShadow:'1px 1px 2px black'}}>Our Vision, Mission& Value</h1>

                        <div className="aboutus-ourvalues-card1 col-12 mb-4">
                            <div className="row justify-content-center align-items-center">
                                <h5 className="aboutus-ourvalues-card1-lhs mt-2 col-5 col-md-2 px-0">
                                    Vision
                                </h5>
                                <p className="aboutus-ourvalues-card1-rhs mt-1 col-12 col-md-8">
                                   Computer instructions are normally stored in consecutive memory locations and are executed
                                   sequentially one at a time. The control reads an instruction from a specific address in 
                                   
                                </p>
                            </div>
                        </div>

                        <div className="aboutus-ourvalues-card2 mb-4 col-12">
                            <div className="row justify-content-center align-items-center">
                                <h5 className="aboutus-ourvalues-card2-lhs mt-2 col-5 col-md-2 px-0">
                                    Vision
                                </h5>
                                <p className="aboutus-ourvalues-card2-rhs mt-1 col-12 col-md-8">
                                   Computer instructions are normally stored in consecutive memory locations and are executed
                                   sequentially one at a time. The control reads an instruction from a specific address in 
                                   
                                </p>
                            </div>
                        </div>

                        <div className="aboutus-ourvalues-card3 col-12">
                            <div className="row justify-content-center align-items-center">
                                <h5 className="aboutus-ourvalues-card3-lhs mt-2 col-5 col-md-2 px-0">
                                    Vision
                                </h5>
                                <p className="aboutus-ourvalues-card3-rhs mt-1 col-12 col-md-8">
                                   Computer instructions are normally stored in consecutive memory locations and are executed
                                   sequentially one at a time. The control reads an instruction from a specific address in 
                                  
                                </p>
                            </div>
                        </div>

                  </div>
            </div>
        </div>
     );
}
 
export default OurValues;