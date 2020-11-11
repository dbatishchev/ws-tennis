import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import autobahn from 'autobahn';
import SessionContext from '../contexts/SessionContext';
import { setConnection } from '../actions/session';

function WSConnection(props) {
  const { dispatch, state: { connection } } = useContext(SessionContext);

  useEffect(() => {
    if (connection) {
      return;
    }

    const autobahnConnection = new autobahn.Connection({ url: 'ws://127.0.0.1:8000/', realm: 'realm1' });
    autobahnConnection.onopen = () => {
      dispatch(setConnection(autobahnConnection));
    };

    autobahnConnection.open();
  }, []);

  return props.children;
}

WSConnection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WSConnection;
