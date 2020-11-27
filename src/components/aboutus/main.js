import React from 'react';

import abtmain_img from '../../assets/aboutus/img/abtmain.png'
import mainbg from '../../assets/aboutus/img/mainbg.png'
import verticalbar from '../../assets/aboutus/img/verticalbar.png'

const Main = () => {
    return ( 
       
        <div className="aboutus-main" >
            <img className="aboutus-mainbg" src={mainbg} alt=""/>
            <img className="aboutus-main-verticalbar" src={verticalbar} alt=""/>

             <div className="col-12 px-0 mt-5 pt-5">
               <div className="container">
                    <div className="row justify-content-center align-items-center ">
                        <div className="aboutus-main-heading col-12 col-md-7 mt-5 pt-5 pb-5 mb-3">
                            <h1 style={{ fontWeight:'bold', fontSize:'40', textShadow:'1px 1px 2px black'}}>About US</h1>
                                <h3 style={{fontWeight:'300'}}>
                                    A Capmpus Chapter of CodeChef <br/>At Chandigarh University
                                </h3>
                                <button className="btn events-main-btn-half " 
                                    style={{outline:"none",
                                        border:'none',
                                        color:'white',
                                        padding:'12px',
                                        borderRadius:'10px',
                                        marginTop:'20px', 
                                        backgroundColor: '#F24F04',}}>Learn More
                                                                            <span 
                                                                                style={{
                                                                                backgroundColor: '#F66C2D',
                                                                                padding:'7px',
                                                                                marginLeft:'10px',
                                                                                borderRadius:'5px',
                                                                                }}>>
                                                                            </span> 
                                </button>
                        </div>
                        <img className="aboutus-main-img col-12 col-md-5 pr-md-0" style={{margin:'0 auto'}} src={abtmain_img} alt=""/>
                    </div>
               </div>
             </div>
        </div>

     );
}
 
export default Main;