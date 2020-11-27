import React, { Component } from 'react'

export class Perks extends Component {
    render() {
        return (
            <>
                {/* The Perks Start */}
                <div className="container-fluid badges">
                    <div className="row badges-head">
                        <div className="badges-upper-heading">ALL THE FLAIR</div>
                        <div className="badges-lower-heading">The Perks</div>
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
                    {/* The Perks End */}

            </>
        )
    }
}

export default Perks
