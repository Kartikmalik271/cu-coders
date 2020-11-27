import React, { Component } from 'react'

import "../../assets/editorial post/css/editorialPostStyles.css";

import Approach from '../../components/editorial post/Approach';
import Code from '../../components/editorial post/Code';
import QuestionDetails from '../../components/editorial post/questionDetails';

export class EditorialPost extends Component {
    render() {
        return (
            <>
                <QuestionDetails />
                <Approach />
                <Code />
            </>
        )
    }
}

export default EditorialPost
