import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post/:id">
          <PostDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
