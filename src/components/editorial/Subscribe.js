import React, { Component } from 'react'
import subscribe from "../../assets/editorial/images/Subscribe.png";
import rainEffect from "../../assets/editorial/images/rainEffect.png"
export class Job extends Component {
    render() {
        return (
            <>
                {/* Head Start */}
                <div className="row editorial-head">
                    
                    <img className="editorial-rainImage" src={rainEffect} alt="Rain Effect Image"/>

                    <div className="col-sm-4 editorial-head-left">
                        <div className="editorial-bold"><strong>Our Editorial</strong></div>
                        <div className="editorial">
                            <span>All CU-Coders contest <br />editorials can be found here</span>
                        </div>
                        <div className="mx-auto ">
                        <button className="btn events-main-btn-half " 
                                    style={{outline:"none",
                                        border:'none',
                                        color:'white',
                                        padding:'12px',
                                        borderRadius:'10px',
                                        marginTop:'20px', 
                                        backgroundColor: '#F24F04',}}>Learn More
                                                                            <span 
                                                                                style={{
                                                                                backgroundColor: '#F66C2D',
                                                                                padding:'7px',
                                                                                marginLeft:'10px',
                                                                                borderRadius:'5px',
                                                                                }}>>
                                                                            </span> 
                                </button>
                        </div>
                    </div>

                    <div className="col-sm-8 editorial-head-right">
                        <img src={subscribe} alt="Subscribe Image"/>
                    </div>
                </div>
                    {/* Head End */}   
            </>
        )
    }
}

export default Job
