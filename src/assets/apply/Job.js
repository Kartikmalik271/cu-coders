import React, { Component } from 'react'
import interView from "../../assets/apply/images/Interview Recruitment.png";
import rainEffect from "../../assets/apply/images/Rain effect.png"
export class Job extends Component {
    render() {
        return (
            <>
                {/* Job Start */}
                <div className="row job-head">
                    
                    <img className="rainImage" src={rainEffect} alt="Rain Effect Image"/>

                    <div className="col-sm-6 job-head-left">
                        <span style={{marginBottom:"10px", display:"block"}}>WE'RE HIRING A FULL-TIME</span>
                        <hr />
                        <div className="job">
                            <span><strong>JOB NAME</strong></span>
                        </div>
                        <hr />
                    </div>

                    <div className="col-sm-6 job-head-right">
                        <img src={interView} alt="Interview Image"/>
                    </div>
                </div>
                    {/* Job End */}   
            </>
        )
    }
}

export default Job
