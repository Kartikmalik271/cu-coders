import React from 'react';

import main_img from '../../assets/career/img/mainimg.png'
import bluedash from '../../assets/career/img/blueline.png'
const Main = () => {
    return ( 
       
        <div className="career-main py-0 "style={{textAlign:'center'}} >

             <div className="col-12 px-0 mt-5 pt-5 align-self-center">
               <div className="container">
               <img className="career-main-img col-12 col-md-5 pr-md-0" style={{margin:'0 auto'}} src={main_img} alt=""/>

                        <div className="career-main-heading col-12  mt-5  mb-3"style={{textAlign:'center'}}>
                            <h4 style={{ fontWeight:'bold', fontSize:'40',color:'#2c4766'}}>Work with Cu-Coders</h4>
                                <img src={bluedash}style={{margin:'0 auto'}} alt=""/>
                                <h4 style={{fontWeight:'300', color:'red'}}>
                                    You can't always pick your family, but you can pic where you work.
                                </h4>
                                   
                        </div>
                    </div>
             </div>
        </div>

     );
}
 
export default Main;