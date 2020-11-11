import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { SessionProvider } from './store/SessionStore';
import WSConnection from './containers/WSConnection';
// import GameContainer from './containers/GameContainer';

ReactDOM.render(
  <React.StrictMode>
    <SessionProvider>
      <WSConnection>
        <App />
      </WSConnection>
    </SessionProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
