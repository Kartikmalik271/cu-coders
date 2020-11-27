import React from 'react';
import moreinfobg1 from '../../assets/event-details/moreinfobg1.png';
import moreinfobg2 from '../../assets/event-details/moreinfobg2.png';
import moreinfobg from '../../assets/event-details/moreinfobg.png';
import moreinfoline from '../../assets/event-details/moreinfoline.png';

import Moreinfoimg1 from '../../assets/event-details/moreinfoimg1.png';
import Moreinfoimg2 from '../../assets/event-details/moreinfoimg2.png';
import Moreinfoimg3 from '../../assets/event-details/moreinfoimg3.png';



import Moreinfo from './more-info';




const eventsmoredetails = () => {

    var moreinfo1 ={
        title: "Place",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }

    var moreinfo2 ={
        title: "Organiser",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."


    }

    var moreinfo3 ={
        title: "Statistics",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }

    var moreinfo4 ={
        title: "Result",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    };

    return(
        <div className="more-info">
            <div className="col-12" >
                <div className="row " >
                    <div className="col-12" >
                        
                        <div className="row ">
                            <div className="col-12">
                                <img className="col-12 ml-2" src={moreinfobg1} />

                                <div className="row mr-2 ml-2 more-info-content justify-content-center"  >
                                    
                                
                                     <h1 style={{color:"#e65c00"}}> More Info </h1>
                                
                                </div>


                                <div className="row   mr-2 ml-2 more-info-content justify-content-center" >
                                    <img src={moreinfoline} />
                                </div>
                                <div className="row   mr-2 ml-2 more-info-content justify-content-center" >
                                    <div className="col-12 col-md-3">
                                        <Moreinfo  moreinfo={moreinfo1} image = {Moreinfoimg1}/>

                                   

                                    </div>

                                    <div className="col-12 col-md-3">
                                        <Moreinfo moreinfo={moreinfo2} image = {Moreinfoimg2}/>
                                    </div>

                                    <div className="col-12 col-md-3">
                                        <Moreinfo moreinfo={moreinfo3} image = {Moreinfoimg3}/>
                                    </div>

                                    <div className="col-12 col-md-3">
                                        <Moreinfo moreinfo={moreinfo4} image = {Moreinfoimg1}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className="col-12 " src={moreinfobg2} />
                                   

                                
                                   

                                     
                                   

                                

                                

                                

                                


                            

                            
                            
                            



                           
                           
                               

                               

                               
                            

                       
                        
                    </div>
                </div>
            </div>

        </div>


    );
}

export default eventsmoredetails;