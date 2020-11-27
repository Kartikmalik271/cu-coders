import React, { Component } from 'react'

export class Bonus extends Component {
    render() {
        return (
            <>
                                        {/* Bonus Skills Start */}
                                        <div className="container-fluid badges">
                    <div className="row badges-head">
                        <div className="badges-upper-heading">THE EXTRA STUFF</div>
                        <div className="badges-lower-heading">Bonus Skills</div>
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
                    {/* Bonus Skils End */}

            </>
        )
    }
}

export default Bonus
