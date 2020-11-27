import React from 'react';

import mainbg1 from '../../assets/aboutus/img/mainbg.png'
import mainbg2 from '../../assets/career/img/icon.png'
import circle from '../../assets/upcomingDet/img/circle.png'
import dashedbox from '../../assets/upcomingDet/img/dashedbox.png'
import rectangle from '../../assets/upcomingDet/img/rectangle.png'
import mainimg from '../../assets/upcomingDet/img/mainimg.png'



const Main = () => {
    return ( 
        <div className="upcomingdetails-main col-12">
            <div className="row justify-content-center">
            <img className="aboutus-mainbg" src={mainbg1} alt=""/>
            <img className="col-12 pt-5 d-none d-md-block" src={mainbg2} style={{width:'100%',position:'absolute'}} alt=""/>
            <div className="col-12 col-md-10 mt-4 pt-5 mt-md-5">
                <img className="col-12 " src={mainimg}  alt=""/>
                <img className="upcomingdet-circle" src={circle} alt=""/>
                <img className="upcomingdet-dashedbox" src={dashedbox} alt=""/>
                <img className="upcomingdet-rectangle" src={rectangle} alt=""/>
            </div>

            </div>
        </div>
     );
}
 
export default Main;