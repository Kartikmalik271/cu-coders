import React, { Component } from 'react'

export class Bonus extends Component {
    render() {
        return (
            <>
                                        {/* Bonus Skills Start */}
                                        <div className="container-fluid apply-badges">
                    <div className="row apply-badges-head">
                        <div className="apply-badges-upper-heading">THE EXTRA STUFF</div>
                        <div className="apply-badges-lower-heading">Bonus Skills</div>
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
                    {/* Bonus Skils End */}

            </>
        )
    }
}

export default Bonus
