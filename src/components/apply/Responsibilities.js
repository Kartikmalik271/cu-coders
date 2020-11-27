import React, { Component } from 'react'

export class Responsibilities extends Component {
    render() {
        return (
            <>
                {/* Responsibilities Start */}
                <div className="container-fluid apply-badges">
                    <div className="row apply-badges-head">
                        <div className="apply-badges-upper-heading">THE DAILY TO-DOS</div>
                        <div className="apply-badges-lower-heading">Responsibilities</div>
                    </div>
                    
                    <div className="row mx-auto apply-centered">
                        <div className="apply-badges-round ">
                            <div className="apply-inner-card apply-left">
                                But I...
                            </div>
                            <div>But I...</div>
                        </div>

                        <div className="apply-badges-round ">
                            <div  className="apply-inner-card apply-mid">
                                But I...
                            </div>
                            <div>But I...</div>
                        </div>

                        <div className="apply-badges-round">
                            <div className="apply-inner-card apply-right">
                                But I...
                            </div>
                            <div>But I...</div>
                        </div>
                    </div>
                </div>
                        {/* Responsibilities End */}
            </>
        )
    }
}

export default Responsibilities
