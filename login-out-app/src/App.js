import './App.css';
import React from 'react';
import Login from './LogIn';
import LogInUnsuc from './LogInUnsuc';
import Welcome from './Welcome';

import {
   BrowserRouter as Router, 
   Route, 
   Switch 
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={Login} />
        <Route path="/unsuccessful" component={LogInUnsuc} />
        <Route path="/welcome" component={Welcome} />

      </Switch>
    </Router>

  );
}

export default App;
