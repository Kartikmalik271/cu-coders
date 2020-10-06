import React from 'react';
import main_img from '../../assets/homepage/img/OBJECTS.png'

const Main = () => {
    return ( 
        <div className=" homepage-main">
           <div className="col-12" >
                <div className="row align-items-center  ">
                    <div className="homepage-main-heading col-12 col-md-7 mt-5 pt-5 pb-5 mb-3">
                        <h1 style={{ textAlign:'center' , fontWeight:'300', fontSize:'40', textShadow:'1px 1px 2px black'}}>CodeChef Capmus Chapter <br/>
                            <span style={{fontWeight:'bold', color:' rgb(4, 127, 95)', textShadow:'1px 1px 3px black'}}>CU-Coders</span></h1>
                    </div>
                    <img className="homepage-main-img col-12 col-md-5" style={{margin:'0 auto'}} src={main_img} alt=""/>
                </div>
           </div>
        </div>
     );
}
 
export default Main;