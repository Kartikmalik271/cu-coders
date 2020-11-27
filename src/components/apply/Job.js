import React, { Component } from 'react'
import interView from "../../assets/apply/images/Interview Recruitment.png";
import rainEffect from "../../assets/apply/images/Rain effect.png"
export class Job extends Component {
    render() {
        return (
            <>
                {/* Job Start */}
                <div className="row apply-job-head">
                    
                    <img className="apply-rainImage" src={rainEffect} alt="Rain Effect Image"/>

                    <div className="col-sm-6 apply-job-head-left">
                        <span style={{marginBottom:"10px", display:"block"}}>WE'RE HIRING A FULL-TIME</span>
                        <hr className="apply-hr" />
                        <div className="apply-job">
                            <span><strong>JOB NAME</strong></span>
                        </div>
                        <hr className="apply-hr" />
                    </div>

                    <div className="col-sm-6 apply-job-head-right">
                        <img src={interView} alt="Interview Image"/>
                    </div>
                </div>
                    {/* Job End */}   
            </>
        )
    }
}

export default Job
