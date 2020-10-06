import React from 'react';
import './homepage.css'

import oneimg from '../../assets/homepage/img/oneimg.png'
import twoimg from '../../assets/homepage/img/twoimg.png'
import threeimg from '../../assets/homepage/img/threeimg.png'
import fourimg from '../../assets/homepage/img/fourimg.png'
import one from '../../assets/homepage/img/one.png'
import two from '../../assets/homepage/img/one2.png'
import three from '../../assets/homepage/img/one3.png'
import four from '../../assets/homepage/img/one4.png'
import Review from '../../assets/homepage/img/Review.png'

import line from '../../assets/homepage/img/line.png'
import line2 from '../../assets/homepage/img/line2.png'
import Main from '../../components/homepage/Main';
import HowWorks from '../../components/homepage/HowWorks';
import Content from '../../components/homepage/Content';

import ContentLS from '../../components/homepage/ContentLS';
import RecentBlogs from '../../components/homepage/RecentBlogs';
import WhatTheySay from '../../components/homepage/whatTheySay';
import FeedbackBox from '../../components/homepage/feedback';

const Homepage = () => {
    return ( 
        <div>
           
            <Main/>
            <HowWorks/>
            <Content title="Programming"  oneimg={oneimg}  line={line} count={one} />
            <ContentLS title2="Development" twoimg={twoimg} line2={line2} count={two}/>
            <Content title="ML & AI"  oneimg={threeimg} line={line} count={three}/>
            <ContentLS title2="Design" twoimg={fourimg } line2={line2} count={four}/>
            <RecentBlogs/>
            <WhatTheySay Review={Review}/>
            <FeedbackBox/>
          
            
        </div>
     );
}
 
export default Homepage;