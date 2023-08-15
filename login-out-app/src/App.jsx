import './App.css';
import React from 'react';
import Login from './LogIn';
import LogInUnsuc from './LogInUnsuc';
import Welcome from './Welcome';

import {
   BrowserRouter as Router, 
   Route, 
   Routes, 
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Login />} /> 
        <Route path="/unsuccessful" element={<LogInUnsuc />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
