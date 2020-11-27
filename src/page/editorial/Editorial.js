import React, { Component } from 'react';

import '../../assets/editorial/css/editorialStyles.css';

import Subscribe from '../../components/editorial/Subscribe';
import Content from "../../components/editorial/Content"

export default class Editorial extends Component {
    render() {
        return (
            <>        
                 <div className>
                    <Subscribe />
                    <Content />
                 </div>
            </>
        )
    }
}
