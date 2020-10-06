import React from 'react';
import './homepage.css'
import Main from '../../components/homepage/Main';
import Team from '../../components/homepage/Team';
import Footer from '../../components/homepage/footer';
import AboutUs from '../../components/homepage/Aboutus';
import JoinClubs from '../../components/homepage/JoinClubs';
import Events from '../../components/homepage/Events';



const Homepage = () => {
    return ( 
        <div>
           
            <Main/> 
            <AboutUs/>
            <JoinClubs/>
            <Events/>
            <Team/>
           
            <Footer/>      
            
        </div>
     );
}
 
export default Homepage;