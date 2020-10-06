import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/homepage/Navbar';


import Homepage from './page/homepage/homepage';
import AboutUs from './page/aboutus/aboutus';

import Footer from './components/homepage/footer';
import Career from './page/career/career';
import Events from './page/events/Events';



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
            


           
           

          </Switch>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
