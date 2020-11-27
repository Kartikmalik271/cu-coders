import React, { Component } from 'react'

import icon from "../../assets/past/images/icon.png";
import illustrate from "../../assets/past/images/illustration.png";
import bottomImg from "../../assets/past/images/Group 38357.png"

export class pastHead extends Component {
    render() {
        return (
            <>
                <div className="past-head">
                    <img className="past-head-icon" src={icon} alt="" width="100%"/>
                    <div className="past-centered past-head-image">
                        <img src={illustrate} alt="" width="50%"/>
                    </div>
                    <div className="past-head-bottom">
                        <img src={bottomImg} alt=""/>
                    </div>
                </div>
            </>
        )
    }
}

export default pastHead
