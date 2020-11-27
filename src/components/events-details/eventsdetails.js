import React from 'react';
import './eventsdetails.css';
import Eventsdetailsmain from '../../components/events-details/eventsdetailsmain';
import Eventsdetailscontent  from '../../components/events-details/eventsdetailscontent';
import Eventsdetailsmoreinfo  from '../../components/events-details/eventsdetailsmoreinfo';


const eventsdetails = () => {
    return (
        <div>
            <Eventsdetailsmain/>
            <Eventsdetailscontent/>
            <Eventsdetailsmoreinfo/>

        </div>
    );
}

export default eventsdetails;