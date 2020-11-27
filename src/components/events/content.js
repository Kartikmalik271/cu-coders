import React from 'react';

import upcoming from '../../assets/events/img/mainimg.png'
import past from '../../assets/events/img/mainimg.png'


const Content = () => {
    return ( 
        <div className="col-12 mt-5 pt-5">
            <h2 style={{fontFamily:'Bookmanv,URW Bookman L, Serif',
            color:' #0e364d',
            fontWeight:'bolder', 
            textShadow:'1px 1px 2px black',
            textAlign:'center'}}>Events</h2>
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <img className="col-10 col-md-6 order-last order-md-first" src={upcoming} alt=""/>
                    <div className="col-12 col-md-6 mt-3 ">
                        <h4 style={{fontFamily:'poppins',fontWeight:'bolder',color:'orange'}}>Upcoming Events</h4>
                        <h1 style={{fontFamily:'poppins',fontWeight:'bolder'}}> Discover Our <br/> Glory Beginning</h1>
                        <p>We propmise you'll enjoy every sweet moment to find your <br/> favourite, events what you love and save your time</p>
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
           

            </div>

            <div className="row justify-content-center align-items-center">

                <div className="col-12 col-md-6 mt-5 order-first">
                    <h4 style={{fontFamily:'poppins',fontWeight:'bolder',color:'orange'}}>Past Events</h4>
                    <h1 style={{fontFamily:'poppins',fontWeight:'bolder'}} >Discover Our <br/>Special Events</h1>
                    <p>We propmise you'll enjoy every sweet moment to find your <br/> favourite, events what you love and save your time</p>
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
                <img className="col-10 col-md-6  order-md-first" src={past} alt=""/>


            </div>

           
        </div>
    </div>
     );
}
 
export default Content;