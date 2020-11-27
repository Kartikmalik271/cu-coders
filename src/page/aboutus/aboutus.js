import React from 'react';

import './aboutus.css'

import Main from '../../components/aboutus/main';
import OurNumbs from '../../components/aboutus/OurNumbs';
import OurValues from '../../components/aboutus/OurValues';
import OurTeam from '../../components/aboutus/ourteam';
import Partners from '../../components/aboutus/partners';

const AboutUs = () => {
    return ( 
        <div>
          <Main/>  
          <OurNumbs/>
          <OurValues/>
         <Partners/>
        </div>
     );
}
 
export default AboutUs;