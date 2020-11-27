import React from 'react';

import eventimg from '../../assets/upcomingDet/img/eventimg.png'
import prop1 from '../../assets/upcomingDet/img/prop1.png'
import prop2 from '../../assets/upcomingDet/img/prop2.png'
import prop3 from '../../assets/upcomingDet/img/prop3.png'
import prop4 from '../../assets/upcomingDet/img/prop4.png'



const eventsdetailscontent = () => {

    return(
        <div className="eventsdetails-content">
            <div className="col-12 ">
                <div className="container">
                   <div className="row mb-5 mt-5 justify-content-center align-items-center ">
                       
                    <div className="upcomingdetails-content col-8 col-md-3  mt-3 mt-md-5  order-last order-md-first  mt-5">
                        <div className="row justify-content-center align-items-center">
                            <div className="upcomingdetails-content-event cool-12">
                                <img className="upcomingdetails-content-eventimg col-12 px-0" src={eventimg} alt=""/>
                                <img className="upcomingdetails-content-eventimg-prop1 col-7"src={prop1} alt=""/>
                                <img className="upcomingdetails-content-eventimg-prop2 col-7"src={prop2} alt=""/>
                                <img className="upcomingdetails-content-eventimg-prop3 col-8"src={prop3} alt=""/>
                                <img className="upcomingdetails-content-eventimg-prop4 col-7"src={prop4} alt=""/>
                            </div>
                        </div>
                    </div>
                        

                        <div className="col-12   col-md-8">
                            <div className="row align-items-center mt-5 justify-content-center">
                                <div className="col-12  justify-content-center ">
                                    <h1 > Event Name </h1>
                                    <p className="col-10 p-2  " style={{color:"grey"}}>
                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>

                                </div>
                                

                            </div>
                            
                        </div>
                    </div>
                </div>
                        

                        
                    
                    
                   

                
           
                
                
                    
                      
                        
                    

                    
                
            </div>
        </div>
    );
}

export default eventsdetailscontent;

                        

                        
                          
                          

                        

                        
                        
                    

                
            
            

        