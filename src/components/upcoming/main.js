import React from 'react';

import mainbg from '../../assets/career/img/icon.png'
import mainimg from '../../assets/upcoming//img/mainimg.png'

const Main = () => {
    return ( 
        <div className="col-12">
            <div className="row justify-content-center">
                <img className="col-12 pt-5 d-none d-md-block" src={mainbg} style={{width:'100%',position:'absolute'}} alt=""/>
                <img className="col-10 col-md-5 " src={mainimg} alt=""/>
            </div>
        </div>
     );
}
 
export default Main;