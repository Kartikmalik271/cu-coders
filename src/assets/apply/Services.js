import React, { Component } from 'react'

export class Services extends Component {
    render() {
        return (
            <>
                    {/* Service Start */}
                <div className="container-fluid service">
                    <div className="service-head">
                        <span className="service-head-scroll">Scroll</span>
                        <span>We Provide Best Quality Service</span>
                    </div>

                    <div className="container-fluid"> 
                        <div className="row m-auto service-cards">
                            <div className="card left-card mt-3">
                                <div className="service-card-title">AT A GLANCE</div>
                                <div className="card-body p-0 pt-2 mt-4">
                                    <strong>You're a seasoned developer with a love for clean,
                                    functional code, relentless work ethic and an exceptional eye for detail.</strong>
                                </div>
                            </div>

                            <div className="card right-card">
                                <div className="service-card-title">UP CLOSE</div>
                                <div className="card-body right-body">
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
