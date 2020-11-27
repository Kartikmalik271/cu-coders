import React, { Component } from 'react'

export class Perks extends Component {
    render() {
        return (
            <>
                {/* The Perks Start */}
                <div className="container-fluid apply-badges">
                    <div className="row apply-badges-head">
                        <div className="apply-badges-upper-heading">ALL THE FLAIR</div>
                        <div className="apply-badges-lower-heading">The Perks</div>
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
                    {/* The Perks End */}

            </>
        )
    }
}

export default Perks
