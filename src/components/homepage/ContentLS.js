import React from 'react';




const ContentLS = (props) => {
    return ( 
        <div className="homepage-contentLS col-12">
            
            <div className="two-row">
                <div className="row align-items-center justify-content-center">
                    <div><img className="homepage-content-counting-two col-8 col-lg-4 ml-auto "src={props.count} alt=""/></div>
                    
                    <img className="homepage-content-image col-10 col-lg-5 pb-5 pb-lg-2 order-last order-lg-first" src={props.twoimg} alt=""/>
                
                <div className="homepage-content-heading col-12 col-lg-6 pb-5 pb-lg-2">
                        <h1 style={{fontWeight:'bold', color:' rgb(4, 127, 95)', textShadow:'1px 1px 3px black'}}>{props.title2}</h1>
                        <h6>At CU-Coders, we are confident<br/> 
                            that you would playa significant<br/>
                            role inthe overall success.
                        </h6>
                </div>
                
            
                    <img className="homepage-content-dash d-none d-lg-block" src={props.line2}  alt=""/>
                </div>
            </div>

            
        </div>
     );
}
 
export default ContentLS;