import React, { useEffect, useState } from "react";
import Timer from 'react-compound-timer'

import mainbg from '../../assets/aboutus/img/mainbg.png'

import mainimg from '../../assets/events/img/mainimg.png';


  
const Main = () => {
    
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-11-1`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            '  :': Math.floor(difference / (1000 * 60 * 60 * 24)),
            ' :': Math.floor((difference / (1000 * 60 * 60)) % 24),
            ':': Math.floor((difference / 1000 / 60) % 60),
            '': Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      const [year] = useState(new Date().getFullYear());
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });
    return ( 
        <div className="Events col-12 pt-5">

            <div className="row justify-content-center align-items-center">
            <img className="aboutus-mainbg" src={mainbg} alt=""/>

                <div className="Events-main-content col-10 col-md-5 pt-5">
                    <div className="row justify-content-center align-items-center">
                        <h1 className="col-12" style={{fontFamily:'Bookmanv,URW Bookman L, Serif',color:' #0e364d',fontWeight:'bolder', textShadow:'1px 1px 2px black'}}>Our Events</h1>
                            <div className="Events-timer col-12 mt-5 pt-3">
                                <div className="row justify-content-center align-items-center">

                                    <h2 className="col-12" style={{fontFamily:'poppins',color:' orange',fontWeight:'bold'}}>Next Event</h2>
                                    <h1 className="col-12" style={{fontFamily:'poppins',color:' orange',fontWeight:'bold'}}>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</h1>
                                </div>
                           
                       
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
                </div>
                <img src={mainimg} className="col-10 col-md-5" alt=""/>
            </div>
        </div>
     );
}
 
export default Main;