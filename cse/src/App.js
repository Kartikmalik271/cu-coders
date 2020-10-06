import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/homepage/Navbar';


import Homepage from './page/homepage/homepage';




function App() {
  const scrollTop = () =>{
    window.scrollTo({top:0, behavior:'smooth'});
};
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Homepage} />

          </Switch>
      </Router>
      <h1 className="scroll-top bg-transparent" onClick={scrollTop}><i className="fa fa-chevron-circle-up fa-xl"/></h1>

    </div>
  );
}

export default App;
