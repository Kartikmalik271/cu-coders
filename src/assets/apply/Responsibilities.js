import React, { Component } from 'react'

export class Responsibilities extends Component {
    render() {
        return (
            <>
                {/* Responsibilities Start */}
                <div className="container-fluid badges">
                    <div className="row badges-head">
                        <div className="badges-upper-heading">THE DAILY TO-DOS</div>
                        <div className="badges-lower-heading">Responsibilities</div>
                    </div>
                    
                    <div className="row mx-auto centered">
                        <div className="badges-round ">
                            <div className="inner-card left">
                                But I...
                            </div>
                            <div>But I...</div>
                        </div>

                        <div className="badges-round ">
                            <div  className="inner-card mid">
                                But I...
                            </div>
                            <div>But I...</div>
                        </div>

                        <div className="badges-round">
                            <div className="inner-card right">
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
