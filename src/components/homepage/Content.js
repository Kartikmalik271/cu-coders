import React from 'react';





const Content = (props) => {
    return ( 
        <div className="homepage-content col-12">
            <div className="first-row">
                <div className="row align-items-center justify-content-center">
                    <img className="homepage-content-counting-one col-8 col-lg-4 mr-auto"src={props.count} alt=""/>
                <div className="homepage-content-heading col-12 col-lg-6 pb-5 pb-lg-2">
                        <h1 style={{fontWeight:'bold', color:' rgb(4, 127, 95)' , textShadow:'1px 1px 3px black'}}>{props.title}</h1>
                        <h6>At CU-Coders, we are confident<br/> 
                            that you would playa significant<br/>
                            role inthe overall success.
                        </h6>
                </div>
                <img className="homepage-content-image col-10 col-lg-5 pb-5 pb-lg-2 " src={props.oneimg} alt=""/>
            
                    <img className="homepage-content-dash d-none d-lg-block" src={props.line}  alt=""/>
                </div>
            </div>

            
            
        </div>
     );
}
 
export default Content;