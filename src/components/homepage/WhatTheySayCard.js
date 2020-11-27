import React from 'react';

const Item = (props) => {
    return ( 
        <div className="col-12  homepage-whattheysay-slider-item  mb-3 mt-3" >
            <div className="row justify-content-center">
                    <div className="homepage-whattheysay-slidercard-content col-12  pt-5 pb-1 pb-3">
                        <div className="row justify-content-center">
                           <img className="homepage-whattheysay-slider-review col-6 col-sm-4"  src={props.photo}   alt=""/>
                            <div className="col-8 px-0">
                            <h3 >{props.name}<br/></h3>
                            <h5 >{props.post}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 pt-3">
                        <div className="row justify-content-center">
                            <p className="mb-5 pb-5">We provide a platform to the Students 
                                                     for their overall Growth
                            </p>
                        </div>
                    </div>
            </div>    
        </div>  
     );
}
 
export default Item;