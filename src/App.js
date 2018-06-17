import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './pages/Home.js';
import Pricing from './pages/Pricing.js';
import Developers from './pages/Developers.js';
import Blog from './pages/Blog.js';
import Terms from './pages/Terms.js';
import Partners from './pages/Partners.js';



class App extends Component {
  render() {
    return (
       <Router>
       <div>
       <Route exact path="/" component={Home}/>
       <Route exact path="/how-it-works" component={Home}/>
       <Route exact path="/pricing" component={Pricing}/>
       <Route exact path="/developers" component={Developers}/>
       <Route exact path="/blog" component={Blog}/>
       <Route exact path="/terms" component={Terms}/>
        <Route exact path="/partners" component={Partners}/>
       </div>
       </Router>
    );
  }
}

export default App;
