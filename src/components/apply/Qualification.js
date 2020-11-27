import React, { Component } from 'react'

export class Qualification extends Component {
    render() {
        return (
            <>
                {/* Qualification Start */}
                <div className="container-fluid apply-badges">
                    <div className="row apply-badges-head">
                        <div className="apply-badges-upper-heading">THE MUST-HAVES</div>
                        <div className="apply-badges-lower-heading">Qualifications</div>
                    </div>
                    
                    <div className="row apply-centered">
                        <div className="apply-badges-round ">
                            <div className="apply-inner-card apply-left">
                                But I...
                            </div>
                            <div className="apply-left-shadow"></div>
                            <div>But I...</div>
                        </div>

                        <div className="apply-badges-round ">
                            <div  className="apply-inner-card apply-mid">
                                But I...
                            </div>
                            But I...
                        </div>

                        <div className="apply-badges-round">
                            <div className="apply-inner-card apply-right">
                                But I...
                            </div>
                            <div>But I...</div>
                        </div>
                    </div>
                </div>
                    {/* Qualification End */}

            </>
        )
    }
}

export default Qualification
