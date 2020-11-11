import React, { useContext } from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.module.css';
import CreateRoom from '../CreateRoom/CreateRoom';
import Game from '../Game/Game';
import Login from '../Login/Login';
import SessionContext from '../../contexts/SessionContext';

export default function App() {
  const { state: { roomId } } = useContext(SessionContext);
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              if (!roomId) {
                return <Redirect to="/login" />;
              }

              return <Redirect to="/game" />;
            }}
          />
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
