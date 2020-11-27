import React, { Component } from 'react'

export class Services extends Component {
    render() {
        return (
            <>
                    {/* Service Start */}
                <div className="container-fluid apply-service">
                    <div className="apply-service-head">
                        <span className="apply-service-head-scroll">Scroll</span>
                        <span>We Provide Best Quality Service</span>
                    </div>

                    <div className="container-fluid"> 
                        <div className="row m-auto apply-service-cards">
                            <div className="card apply-left-card apply-service-card mt-3">
                                <div className="apply-service-card-title">AT A GLANCE</div>
                                <div className="card-body p-0 pt-2 mt-4">
                                    <strong>You're a seasoned developer with a love for clean,
                                    functional code, relentless work ethic and an exceptional eye for detail.</strong>
                                </div>
                            </div>

                            <div className="card apply-right-card apply-service-card">
                                <div className="apply-service-card-title">UP CLOSE</div>
                                <div className="card-body apply-right-body">
                                <strong>Job Description</strong> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    {/* Service End */}

            </>
        )
    }
}

export default Services
