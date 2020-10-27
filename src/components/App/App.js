import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.module.css';
import CreateRoom from '../CreateRoom/CreateRoom';
import Game from '../Game/Game';
import Login from '../Login/Login';

export default function App() {
  return (
    <Router>
      <div>
        {/*<nav>*/}
        {/*  <Link to="/login">About</Link>*/}
        {/*  <Link to="/game">Users</Link>*/}
        {/*</nav>*/}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create">
            <CreateRoom />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
