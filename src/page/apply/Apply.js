import React, { Component } from 'react';
import '../../assets/apply/css/applyStyles.css';

import Job from '../../components/apply/Job';
import Services from "../../components/apply/Services";
import Qualification from "../../components/apply/Qualification";
import Responsibilities from "../../components/apply/Responsibilities";
import Bonus from "../../components/apply/Bonus";
import Perks from "../../components/apply/Perks";
import Form from "../../components/apply/Form";

export default class Apply extends Component {
    render() {
        return (
            <>         
                <Job />
                <Services />
                <Qualification />
                <Responsibilities />
                <Bonus />
                <Perks />
                <Form />
            </>
        )
    }
}
