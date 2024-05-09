import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import './App.css'; // Import the main CSS file

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          {/* Add more routes for different pages */}
          <Route path="*" component={() => <h1>Page Not Found</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;