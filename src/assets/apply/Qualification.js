import React, { Component } from 'react'

export class Qualification extends Component {
    render() {
        return (
            <>
                {/* Qualification Start */}
                <div className="container-fluid badges">
                    <div className="row badges-head">
                        <div className="badges-upper-heading">THE MUST-HAVES</div>
                        <div className="badges-lower-heading">Qualifications</div>
                    </div>
                    
                    <div className="row centered">
                        <div className="badges-round ">
                            <div className="inner-card left">
                                But I...
                            </div>
                            <div className="left-shadow"></div>
                            <div>But I...</div>
                        </div>

                        <div className="badges-round ">
                            <div  className="inner-card mid">
                                But I...
                            </div>
                            But I...
                        </div>

                        <div className="badges-round">
                            <div className="inner-card right">
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
