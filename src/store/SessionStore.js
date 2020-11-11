import React, { useReducer } from 'react';
import SessionContext from '../contexts/SessionContext';
import SessionReducer from '../reducers/SessionReducer';

const initialState = {
  roomId: null,
  connection: null,
};

const { Provider } = SessionContext;

const SessionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SessionReducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { SessionProvider };
