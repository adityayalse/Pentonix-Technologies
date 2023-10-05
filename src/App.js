import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
