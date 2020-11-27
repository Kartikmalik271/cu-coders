import React from 'react';

import rocket from '../../assets/homepage/img/Objects-1.png'

const HowWorks = () => {
    return ( 
        <div className="col-12 ">
            <div className="row align-items-center justify-content-center">
                <img className="homepage-HowWorks-rocket col-5 px-0" src={rocket} alt=""/>
                <div className="homepage-HowWorks-title col-6 ml-auto">
                    <h3 className="d-none d-md-block" style={{fontWeigth:'300'}}>We provide a platform to the 
                    for their overall Growth<br/></h3>
                    <a href="#" style={{ color:' rgb(4, 127, 95)'}}><h2 style={{fontWeight:'bolder'}}>How Works  <i className="fa fa-chevron-circle-right"/></h2> </a>
                </div>
            </div>
        </div>
     );
}
 
export default HowWorks;