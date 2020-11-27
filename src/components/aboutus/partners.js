import React from 'react'


import google from '../../assets/aboutus/img/google.png'
import facebook from '../../assets/aboutus/img/facebook.png'
import youtube from '../../assets/aboutus/img/youtube.png'
import insta from '../../assets/aboutus/img/insta.png'
import partner from '../../assets/aboutus/img/partnerscircle.png'
import Particles from 'react-particles-js'

const Partners = () => {
    return ( 
        <div className="aboutus-partners col-12" >
           
            <div className="row justify-content-center align-items-center">
                <div className="col-12 align-self-center">
                    <div className="row justify-content-center">
                    <Particles className="aboutusparticle col-11 d-none d-lg-block" params={{
                particles:{
                    number:{
                        value:70,
                        density:{
                            enable:true,
                            value_area:1200,
                        }
                    },
                    "color":{
                        "value":"#000000"
                    },
                    "line_linked":{
                      
                        "color":"#000000"
                    
                },
                },
            }}/>
              <Particles className="aboutusparticle col-12 d-block d-lg-none" params={{
                particles:{
                    number:{
                        value:100,
                        density:{
                            enable:true,
                            value_area:1000,
                        }
                    },
                    "color":{
                        "value":"#000000"
                    },
                    "line_linked":{
                      
                        "color":"#000000"
                    
                },
                },
            }}/>
                            <div className="aboutus-partners-headcircle col-7 col-md-4 px-0">
                            
                            <img className="col-12 px-0  " src={partner} alt=""/>
                        
                            </div>
                    </div>
                </div>
               
                <div className="col-12 mt-5  mb-5"style={{textAlign:'center'}}>
                <h5 className="aboutus-partners-subhead" style={{fontFamily:'cursive',color:'grey'}}>We develope campaigns on</h5>
                </div>
                <img className="col-6 col-md-2"   src={google} alt=""/>
                <img className="col-6 col-md-2 mt-md-5 pt-md-5" src={facebook} alt=""/>
                <img className="col-6 col-md-2 mt-md-5 pt-md-5" src={insta} alt=""/>
                <img className="col-6 col-md-2"  src={youtube} alt=""/>

            </div>
        </div>
     );
}
 
export default Partners;