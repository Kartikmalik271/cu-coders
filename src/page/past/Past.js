import React, { Component } from 'react'

import PastHead from "../../components/past/pastHead";
import PastEventHeading from "../../components/past/pastEventHeading";
import EventData from "../../components/past/eventData";

import "../../assets/past/css/pastStyles.css";

export class Past extends Component {
    render() {
        return (
            <div>
                <PastHead />
                <PastEventHeading />
                <EventData />
            </div>
        )
    }
}

export default Past
