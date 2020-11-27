import React, { Component } from 'react'

import cardImage1 from "../../assets/past/images/pic 1.png"
import cardImage2 from "../../assets/past/images/pic 2.png"
import cardImage3 from "../../assets/past/images/pic 3.png"
import num1 from "../../assets/past/images/1.png";
import num2 from "../../assets/past/images/2.png"
import num3 from "../../assets/past/images/3.png";

import rect1 from "../../assets/past/images/Rectangle 1539.png"


export class eventData extends Component {
    render() {
        return (
            <>
                <div className="container mt-5">

                    {/* 1 Start */}

                    <div className="past-card-holder row">
                        <div className="past-card-image col-md-4">
                            <img className="past-event-card-number-first" src={num1} alt="" />
                            <img className="past-event-card-rect-first" src={rect1} alt="" />
                            <button className="past-event-card-button-first">Date and Some info</button>
                            <div className="past-centered"><img  className="past-event-card-image-first" src={cardImage1} alt="" width="80%"/></div>
                            <button className="past-event-card-seemore" >See More</button>
                        </div>
                        <div className="col-md-8 past-centered">
                            <div className="past-event-card-text">
                                <h1 className="my-5">Event Name</h1>
                                <p className="past-centered my-5 past-event-card-para">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 1 End */}

                    {/* 2 Start */}

                    <div className="past-card-holder row my-5 py-5">
                        <div className="past-card-image col-md-4 order-last">
                            <img className="past-event-card-number-second" src={num2} alt="" />
                            <img className="past-event-card-rect-second" src={rect1} alt="" />
                            <button className="past-event-card-button-second">Date and Some info</button>
                            <div className="past-centered"><img  className="past-event-card-image-second" src={cardImage2} alt="" width="80%"/></div>
                            <button className="past-event-card-seemore" >See More</button>
                        </div>
                        <div className="col-md-8">
                            <div className="past-event-card-text">
                                <h1 className="justify-content-right">Event Name</h1>
                                <p className="past-event-card-para past-right">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2 End */}


                    {/* 3 Start */}

                    <div className="past-card-holder row">
                        <div className="past-card-image col-md-4">
                            <img className="past-event-card-number-third" src={num3} alt="" />
                            <img className="past-event-card-rect-third" src={rect1} alt="" />
                            <span className="past-event-card-button-third">
                                <h4>VISA</h4>
                                <span>Debit Card<br /></span>
                                <span>**** **** **** ****<br /></span>
                                <span>Samantha<br /></span>
                           </span>
                            <div className="past-centered"><img  className="past-event-card-image-third" src={cardImage3} alt="" width="80%"/></div>
                            <button className="past-event-card-seemore" >See More</button>
                        </div>
                        <div className="col-md-8 past-centered">
                            <div className="past-event-card-text">
                                <h1 className="my-5">Event Name</h1>
                                <p className="past-centered my-5 past-event-card-para">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 3 End */}


                    <div className="past-centered">
                        <button className="past-addon">More Items <span>></span></button>
                    </div>


                </div>
            </>
        )
    }
}

export default eventData
