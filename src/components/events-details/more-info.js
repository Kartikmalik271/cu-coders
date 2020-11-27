import React from 'react';

const moreinfo = (props) => {
    return(
        
        <div className="col-12  events-details-moreinfo-cards  mb-3 mt-3" >
            <div className="row justify-content-center" style={{backgroundColor:"#ffffff"}}>
                    <div className="events-details-moreinfo-cards-content col-12  pt-5 pb-1 pb-3">
                        <div className="row ">
                           <img className=" col-6 col-sm-4"  src={props.image}   alt=""/>
                            
                        </div>

                        <div className="row">
                            <div className="col-6 col-sm-4">
                                <h3 >{props.moreinfo.title}<br/></h3>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-10 pt-3">
                        <div className="row justify-content-center">
                            <p className="mb-5 pb-5">{props.moreinfo.info}
                            </p>
                        </div>
                    </div>
            </div>    
        </div>  

        

    );
}

export default moreinfo;
