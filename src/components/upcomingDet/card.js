import React from 'react';

const KnowMoreCard = (props) => {
    return ( 
        <div className="col-12">
        <div className="row justify-content-center align-self-center">
            <div className="col-10 col-md-8 col-lg-6 col-xl-4 upcomingdetails-lhs mt-5 pt-3">
                <h5 className="col-3 col-md-2 upcomingdetails-lhs-uprcl px-0">'place'</h5>
                    <p>
                        {props.place}
                    </p>
            </div>
            <div className="col-10 col-md-8 col-lg-6 col-xl-4 upcomingdetails-rhs mt-3 mt-md-5 pt-3 ">
                <h5 className="col-3 col-md-2 upcomingdetails-rhs-uprcl px-0">'Host'</h5>
                    <div className="profile1 col-12 col-md-10 px-md-5 ">                
                        <div className="row">
                            <img className="profile1-photo"src={props.profile} alt=""/>
                                <p className="px-3"><b>{props.name}</b><br/>{props.post}</p>
                        </div>
                    </div>
                    <div className="profile1 col-12 col-md-10 px-md-5 "> 
                        <div className="row justiyf-content-center">
                            <img className="profile1-photo"src={props.profile} alt=""/>
                                <p className="px-3"><b>{props.name}</b><br/>{props.post}</p>
                        </div>
                    </div>
            </div>
        </div>
        </div>
     );
}
 
export default KnowMoreCard;