import React from 'react';

import './career.css'
import Main from '../../components/career/main';
import Content from '../../components/career/content';
import Tabs from '../../components/career/tab';

const Career = () => {
    return ( 
        <div>
            <Main/>
            <Content/>
            <Tabs/>
        </div>
     );
}
 
export default Career;