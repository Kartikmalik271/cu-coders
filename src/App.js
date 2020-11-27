import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/homepage/Navbar';


import Homepage from './page/homepage/homepage';
import AboutUs from './page/aboutus/aboutus';

import Footer from './components/homepage/footer';
import Career from './page/career/career';
import Events from './page/events/Events';
import Upcoming from './page/upcoming/upcoming';
import Apply from './page/apply/Apply';
import Editorial from './page/editorial/Editorial';
import UpcomingDetails from './page/upcomingDet/upcomingDet';
import EditorialPost from './page/editorial post/EditorialPost';
import Past from './page/past/Past';
import Blogpage from './page/blog/blog';
import BlogPost from './page/blogpost/blogpost';
import EventsDetails from './page/Events-details/eventsdetails';
import Gallery from './page/Gallery/gallery';



function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/AboutUs" component={AboutUs}/>
            <Route exact path="/Career" component={Career}/>
            <Route exact path="/Events" component={Events}/>
            <Route exact path="/Upcoming" component={Upcoming}/>
            <Route exact path="/Apply" component={Apply}/>
            <Route exact path="/Editorial" component={Editorial}/>
            <Route exact path="/EditorialPost" component={EditorialPost}/>
            <Route exact path="/Past" component={Past}/>
            <Route exact path="/UpcomingDetails" component={UpcomingDetails}/>
            <Route exact path="/Blog" component={Blogpage}/>
            <Route exact path="/BlogPost" component={BlogPost}/>
            <Route exact path="/EventDet" component={EventsDetails}/>
            <Route exact path="/Gallery" component={Gallery}/>

          </Switch>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
